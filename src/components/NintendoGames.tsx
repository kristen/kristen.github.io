import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { AuthButton } from './AuthButton';
// @ts-expect-error js data file
import { GAMES } from '../data/nintendo-games.js';

interface Game {
  title: string;
  genre: string;
  hours: string;
  systems: string[];
  bestSystem: string;
  tier: string;
  tags: string[];
  note: string;
}

interface UserGameData {
  status?: string;
  tier?: string | null;
}

const SYSTEMS_ORDER = ["NES","SNES","N64","GBA","PS2","GameCube","DS","Wii","3DS","Wii U","Switch Online","Switch","PC","Mobile","PS4"];
const SYSTEM_COLORS: Record<string, string> = {
  NES:"#cc2200",SNES:"#8b1fa8",N64:"#006cb7",GBA:"#8b008b",PS2:"#00439c",
  GameCube:"#5533aa",DS:"#c8860a",Wii:"#888888","3DS":"#cc3300",
  "Wii U":"#009ac7","Switch Online":"#c0392b",Switch:"#e4000f",
  PC:"#1a7a3a",Mobile:"#2a7a6a",PS4:"#003087",
};

const STATUSES = [
  { key:"none",    label:"Untracked",   emoji:"",  color:"#3a3858",bg:"transparent"},
  { key:"wishlist",label:"Want to Play",emoji:"⭐",color:"#d4a017",bg:"#2a2010"},
  { key:"owned",   label:"Owned",       emoji:"📦",color:"#3b9dd2",bg:"#0d2030"},
  { key:"playing", label:"Playing",     emoji:"🎮",color:"#7c6af7",bg:"#1a1535"},
  { key:"paused",  label:"On Hold",     emoji:"⏸",color:"#e0735c",bg:"#2a1510"},
  { key:"beaten",  label:"Beaten",      emoji:"✅",color:"#4da87e",bg:"#0d2018"},
];
const STATUS_MAP = Object.fromEntries(STATUSES.map(s => [s.key, s]));

const TIERS = [
  { key:"S", color:"#f5c842", bg:"#2a2200", label:"S — Unmissable" },
  { key:"A", color:"#e07840", bg:"#281500", label:"A — Excellent" },
  { key:"B", color:"#4da87e", bg:"#0d2018", label:"B — Very Good" },
  { key:"C", color:"#3b9dd2", bg:"#0d2030", label:"C — Worth Playing" },
];
const TIER_MAP = Object.fromEntries(TIERS.map(t => [t.key, t]));

const tagColors: Record<string, string> = {
  RPG:"#7c6af7",Strategy:"#e0735c","Open World":"#4da87e",Adventure:"#3b9dd2",
  Action:"#d4a017","Story-rich":"#c45b8a",Exploration:"#5bb5a2",Classic:"#8e7cc3",
  Relaxing:"#6bab5e",Creative:"#e08d5a",Casual:"#5aabe0","Family-friendly":"#d46ba0","RPG-lite":"#7cb87c",
};

const VIEWS = ["List", "Tier List"];

const TIME_BUCKETS = [
  { label:"≤ 10h", max:10 },
  { label:"≤ 20h", max:20 },
  { label:"≤ 30h", max:30 },
  { label:"≤ 50h", max:50 },
  { label:"≤ 80h", max:80 },
];

const games = GAMES as Game[];

// Firestore helpers — path: users/{uid}/nintendo-games/game-data-v3
async function fbGetGameData(uid: string): Promise<Record<string, UserGameData>> {
  if (!db) return {};
  try {
    const snap = await getDoc(doc(db, 'users', uid, 'nintendo-games', 'game-data-v3'));
    return snap.exists() ? JSON.parse(snap.data().value || '{}') : {};
  } catch { return {}; }
}

async function fbSetGameData(uid: string, data: Record<string, UserGameData>): Promise<void> {
  if (!db) return;
  try {
    await setDoc(doc(db, 'users', uid, 'nintendo-games', 'game-data-v3'), { value: JSON.stringify(data) });
  } catch {}
}

function SystemBadge({ system, isBest }: { system: string; isBest: boolean }) {
  const color = SYSTEM_COLORS[system] || "#666";
  return (
    <span style={{
      display:"inline-flex",alignItems:"center",gap:"2px",
      padding:"1px 6px",borderRadius:"4px",fontSize:"0.62rem",fontWeight:800,
      letterSpacing:"0.05em",textTransform:"uppercase",whiteSpace:"nowrap",
      background:isBest ? color : "transparent",
      color:isBest ? "#fff" : color,
      border:`1px solid ${color}${isBest?"":"66"}`,
      opacity:isBest?1:0.75,
    }}>
      {isBest && <span style={{fontSize:"0.55rem",marginRight:"1px"}}>★</span>}
      {system}
    </span>
  );
}

function HoursBadge({ hours }: { hours: string }) {
  const num = parseInt(hours);
  const isShort = num <= 20;
  const isEndless = isNaN(num);
  return (
    <span style={{
      display:"inline-block",padding:"1px 8px",borderRadius:"999px",
      fontSize:"0.7rem",fontWeight:700,whiteSpace:"nowrap",
      background:isEndless?"#252535":isShort?"#152515":"#151a30",
      color:isEndless?"#6a68a0":isShort?"#4da87e":"#5a78b0",
    }}>⏱ {hours}h</span>
  );
}

function TierBadge({ tier }: { tier: string | null | undefined }) {
  const t = tier ? TIER_MAP[tier] : null;
  if (!t) return null;
  return (
    <span style={{
      display:"inline-block",padding:"1px 7px",borderRadius:"5px",
      fontSize:"0.7rem",fontWeight:900,letterSpacing:"0.05em",
      background:t.bg,border:`1px solid ${t.color}55`,color:t.color,
    }}>{t.key}</span>
  );
}

function TierPicker({ current, onChange }: { current: string | null | undefined; onChange: (t: string | null) => void }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);
  const t = current ? TIER_MAP[current] : null;
  return (
    <div style={{position:"relative"}} onClick={e => e.stopPropagation()}>
      <button onClick={() => setOpen(o => !o)} style={{
        padding:"2px 8px",borderRadius:"5px",cursor:"pointer",fontFamily:"inherit",
        fontSize:"0.7rem",fontWeight:900,letterSpacing:"0.05em",
        border:t?`1px solid ${t.color}55`:"1px dashed #2e2e45",
        background:t?t.bg:"transparent",color:t?t.color:"#3a3858",
      }}>{t?t.key:"Tier ▾"}</button>
      {open && (
        <div style={{
          position:"absolute",right:0,top:"calc(100% + 4px)",zIndex:300,
          background:"#161820",border:"1px solid #2a2a3e",borderRadius:"10px",
          overflow:"hidden",minWidth:"185px",boxShadow:"0 10px 30px rgba(0,0,0,0.7)",
        }}>
          {([{key:null,color:"#555",bg:"transparent",label:"— Remove override"},...TIERS] as Array<{key:string|null,color:string,bg:string,label:string}>).map(opt => (
            <button key={opt.key??"none"} onClick={() => { onChange(opt.key); setOpen(false); }} style={{
              display:"flex",alignItems:"center",gap:"9px",width:"100%",
              padding:"7px 13px",border:"none",
              background:opt.key===current?(opt.bg||"#22243a"):"transparent",
              color:opt.key===current?opt.color:"#5a5880",
              fontSize:"0.8rem",fontWeight:opt.key===current?700:400,
              cursor:"pointer",fontFamily:"inherit",textAlign:"left",
            }}
              onMouseEnter={e => { if(opt.key!==current)(e.currentTarget as HTMLButtonElement).style.background="#1e2030"; }}
              onMouseLeave={e => { if(opt.key!==current)(e.currentTarget as HTMLButtonElement).style.background="transparent"; }}>
              {opt.key
                ? <span style={{display:"inline-block",width:"22px",height:"22px",borderRadius:"4px",background:opt.bg,border:`1px solid ${opt.color}55`,color:opt.color,fontSize:"0.78rem",fontWeight:900,textAlign:"center",lineHeight:"22px",flexShrink:0}}>{opt.key}</span>
                : <span style={{width:"22px",display:"inline-block"}}/>
              }
              <span style={{fontSize:"0.78rem"}}>{opt.label}</span>
              {opt.key===current && <span style={{marginLeft:"auto",fontSize:"0.65rem"}}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StatusPicker({ current, onChange }: { current: string; onChange: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  const cur = STATUS_MAP[current] || STATUSES[0];
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);
  return (
    <div style={{position:"relative"}} onClick={e => e.stopPropagation()}>
      <button onClick={() => setOpen(o => !o)} style={{
        display:"flex",alignItems:"center",gap:"4px",padding:"3px 9px",
        borderRadius:"999px",border:cur.key==="none"?"1px dashed #2e2e45":`1px solid ${cur.color}55`,
        background:cur.key==="none"?"transparent":cur.bg,
        color:cur.key==="none"?"#3a3858":cur.color,
        fontSize:"0.72rem",fontWeight:700,cursor:"pointer",fontFamily:"inherit",
        whiteSpace:"nowrap",minWidth:"95px",justifyContent:"center",
      }}>
        {cur.emoji && <span>{cur.emoji}</span>}
        <span>{cur.key==="none"?"+ Track":cur.label}</span>
        <span style={{fontSize:"0.5rem",opacity:0.5}}>▾</span>
      </button>
      {open && (
        <div style={{
          position:"absolute",right:0,top:"calc(100% + 4px)",zIndex:200,
          background:"#161820",border:"1px solid #2a2a3e",borderRadius:"10px",
          overflow:"hidden",minWidth:"148px",boxShadow:"0 10px 30px rgba(0,0,0,0.7)",
        }}>
          {STATUSES.map(s => (
            <button key={s.key} onClick={() => { onChange(s.key); setOpen(false); }} style={{
              display:"flex",alignItems:"center",gap:"8px",width:"100%",
              padding:"7px 13px",border:"none",
              background:s.key===current?(s.bg||"#22243a"):"transparent",
              color:s.key===current?s.color:"#5a5880",
              fontSize:"0.8rem",fontWeight:s.key===current?700:400,
              cursor:"pointer",fontFamily:"inherit",textAlign:"left",
            }}
              onMouseEnter={e => { if(s.key!==current)(e.currentTarget as HTMLButtonElement).style.background="#1e2030"; }}
              onMouseLeave={e => { if(s.key!==current)(e.currentTarget as HTMLButtonElement).style.background="transparent"; }}>
              <span style={{width:"18px",textAlign:"center"}}>{s.emoji||"○"}</span>
              <span>{s.label}</span>
              {s.key===current && <span style={{marginLeft:"auto",fontSize:"0.65rem"}}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GameCard({ game, status, tier, onStatus, onTier, compact = false }: {
  game: Game;
  status: string;
  tier: string | null | undefined;
  onStatus: (s: string) => void;
  onTier: (t: string | null) => void;
  compact?: boolean;
}) {
  const isBeaten = status === "beaten";
  const effectiveTier = tier !== undefined ? tier : game.tier;
  return (
    <div style={{
      background:isBeaten?"#0e1a12":"#131520",
      border:`1px solid ${isBeaten?"#1e3a2a":"#1e2030"}`,
      borderRadius:"10px",padding:compact?"9px 13px":"13px 17px",
      display:"grid",gridTemplateColumns:"1fr auto",
      gap:"10px",alignItems:"start",opacity:isBeaten?0.68:1,
    }}>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"4px"}}>
          <span style={{
            fontSize:"0.95rem",fontWeight:700,
            color:isBeaten?"#6a9875":"#ece9ff",
            textDecoration:isBeaten?"line-through":"none",
            textDecorationColor:"#4da87e55",
          }}>{game.title}</span>
          <TierBadge tier={effectiveTier}/>
        </div>
        <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:compact?"4px":"6px"}}>
          {game.systems.map(sys => (
            <SystemBadge key={sys} system={sys} isBest={sys===game.bestSystem}/>
          ))}
        </div>
        {!compact && (
          <>
            <div style={{fontSize:"0.73rem",color:"#5a5878",fontStyle:"italic",marginBottom:"4px"}}>{game.genre}</div>
            <p style={{margin:"0 0 6px",fontSize:"0.81rem",color:"#8a88b8",lineHeight:"1.5"}}>{game.note}</p>
          </>
        )}
        <div style={{display:"flex",gap:"4px",flexWrap:"wrap",alignItems:"center"}}>
          {game.tags.map(tag => (
            <span key={tag} style={{
              padding:"1px 6px",borderRadius:"999px",fontSize:"0.63rem",fontWeight:600,
              background:(tagColors[tag]||"#555")+"1a",color:tagColors[tag]||"#aaa",
              border:`1px solid ${(tagColors[tag]||"#555")}28`,
            }}>{tag}</span>
          ))}
          <HoursBadge hours={game.hours}/>
        </div>
      </div>
      <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"5px"}}>
        <StatusPicker current={status} onChange={onStatus}/>
        <TierPicker current={tier} onChange={onTier}/>
      </div>
    </div>
  );
}

export function NintendoGames() {
  const { user } = useAuth();
  const [view, setView] = useState("List");
  const [systemFilters, setSystemFilters] = useState(new Set<string>());
  const [tagFilters, setTagFilters] = useState(new Set<string>());
  const [statusFilters, setStatusFilters] = useState(new Set<string>());
  const [tierFilters, setTierFilters] = useState(new Set<string>());
  const [maxHours, setMaxHours] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("default");
  const [userData, setUserData] = useState<Record<string, UserGameData>>({});
  const [loaded, setLoaded] = useState(false);

  const toggle = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, key: string) =>
    setter(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const clearFilters = () => {
    setSystemFilters(new Set()); setTagFilters(new Set());
    setStatusFilters(new Set()); setTierFilters(new Set());
    setMaxHours(null); setSortBy("default");
  };
  const hasActiveFilters = systemFilters.size>0||tagFilters.size>0||statusFilters.size>0||tierFilters.size>0||maxHours!==null||sortBy!=="default";

  // Initial load from localStorage (including legacy key migration)
  useEffect(() => {
    let merged: Record<string, UserGameData> = {};
    for (const key of ["game-statuses", "game-statuses-v2"]) {
      try {
        const val = localStorage.getItem(key);
        if (val) {
          const old = JSON.parse(val) as Record<string, string>;
          Object.entries(old).forEach(([title, status]) => {
            if (!merged[title]) merged[title] = {};
            merged[title].status = status;
          });
        }
      } catch {}
    }
    try {
      const val = localStorage.getItem("game-data-v3");
      if (val) {
        const full = JSON.parse(val) as Record<string, UserGameData>;
        Object.entries(full).forEach(([title, d]) => {
          merged[title] = { ...merged[title], ...d };
        });
      }
    } catch {}
    setUserData(merged);
    setLoaded(true);
  }, []);

  // On sign-in: merge Firestore data with local (local wins on conflict), save union to both
  useEffect(() => {
    if (!user) return;
    fbGetGameData(user.uid).then(remote => {
      setUserData(prev => {
        const merged: Record<string, UserGameData> = { ...remote };
        Object.keys(prev).forEach(title => {
          merged[title] = { ...(remote[title] || {}), ...prev[title] };
        });
        try { localStorage.setItem("game-data-v3", JSON.stringify(merged)); } catch {}
        fbSetGameData(user.uid, merged);
        return merged;
      });
    });
  }, [user]);

  const save = useCallback((next: Record<string, UserGameData>) => {
    setUserData(next);
    try { localStorage.setItem("game-data-v3", JSON.stringify(next)); } catch {}
    if (user) fbSetGameData(user.uid, next);
  }, [user]);

  const setField = (title: string, field: keyof UserGameData, value: string | null) => {
    const next = { ...userData, [title]: { ...(userData[title] || {}), [field]: value } };
    save(next);
  };

  const getStatus = (title: string) => userData[title]?.status || "none";
  const getUserTier = (title: string) => userData[title]?.tier;
  const getEffectiveTier = (title: string) => userData[title]?.tier !== undefined ? userData[title].tier : games.find(g => g.title===title)?.tier || null;

  const parseHoursMin = (h: string) => { const m = h.match(/\d+/); return m ? parseInt(m[0]) : 999; };

  const filtered = games.filter(g => {
    const sysMatch = systemFilters.size===0 || g.systems.some(s => systemFilters.has(s));
    const tagMatch = tagFilters.size===0 || g.tags.some(t => tagFilters.has(t));
    const statusMatch = statusFilters.size===0 || statusFilters.has(getStatus(g.title));
    const tierMatch = tierFilters.size===0 || tierFilters.has(getEffectiveTier(g.title) ?? '');
    const timeMatch = maxHours===null || parseHoursMin(g.hours) <= maxHours;
    return sysMatch && tagMatch && statusMatch && tierMatch && timeMatch;
  });

  const sorted = sortBy==="default" ? filtered : [...filtered].sort((a, b) => {
    const av = parseHoursMin(a.hours), bv = parseHoursMin(b.hours);
    return sortBy==="asc" ? av-bv : bv-av;
  });

  const counts = STATUSES.slice(1).reduce((acc, s) => {
    acc[s.key] = games.filter(g => getStatus(g.title)===s.key).length;
    return acc;
  }, {} as Record<string, number>);
  const totalTracked = Object.values(counts).reduce((a, b) => a+b, 0);

  if (!loaded) return (
    <div style={{minHeight:"100vh",background:"#0d0f14",display:"flex",alignItems:"center",justifyContent:"center",color:"#3a3858",fontFamily:"Georgia,serif"}}>Loading...</div>
  );

  return (
    <div style={{minHeight:"100vh",background:"#0d0f14",color:"#e8e6f0",fontFamily:"'Georgia','Times New Roman',serif",paddingBottom:"60px"}}>

      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#1a0a2e 0%,#0d1a2e 60%,#0a1a0a 100%)",padding:"30px 24px 18px",textAlign:"center",borderBottom:"1px solid #1e1e30",position:"relative",overflow:"visible"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 30% 50%,rgba(124,106,247,0.10) 0%,transparent 60%),radial-gradient(ellipse at 70% 50%,rgba(77,168,126,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{fontSize:"1.6rem",marginBottom:"3px"}}>🎮</div>
        <h1 style={{fontFamily:"'Georgia',serif",fontSize:"clamp(1.1rem,4vw,1.7rem)",fontWeight:700,margin:"0 0 3px",color:"#f0eeff"}}>Nintendo Games Worth Your Time</h1>
        <p style={{color:"#6a6890",fontSize:"0.78rem",margin:"0 0 12px"}}>No platformers · All eras · ★ = best version</p>
        {totalTracked>0 && (
          <div style={{display:"flex",gap:"5px",justifyContent:"center",flexWrap:"wrap",marginBottom:"12px"}}>
            {STATUSES.slice(1).filter(s => counts[s.key]>0).map(s => (
              <div key={s.key} style={{display:"flex",alignItems:"center",gap:"3px",padding:"2px 9px",borderRadius:"999px",background:s.bg,border:`1px solid ${s.color}44`,color:s.color,fontSize:"0.71rem",fontWeight:600}}>
                <span>{s.emoji}</span><span>{counts[s.key]} {s.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="auth-slot">
          <AuthButton />
        </div>
        <div style={{display:"flex",gap:"6px",justifyContent:"center"}}>
          {VIEWS.map(v => (
            <button key={v} onClick={() => setView(v)} style={{padding:"5px 16px",borderRadius:"999px",border:view===v?"none":"1px solid #2e2e45",background:view===v?"#2e2e55":"transparent",color:view===v?"#c0bdff":"#4a4868",fontSize:"0.78rem",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{v}</button>
          ))}
        </div>
      </div>

      {/* LIST VIEW */}
      {view==="List" && (
        <>
          <div style={{maxWidth:"900px",margin:"0 auto",padding:"12px 16px 0"}}>
            {/* Status — multi-select */}
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"6px",alignItems:"center"}}>
              <span style={{color:"#3a3858",fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginRight:"2px"}}>Status</span>
              {STATUSES.slice(1).map(s => {
                const on = statusFilters.has(s.key);
                return <button key={s.key} onClick={() => toggle(setStatusFilters, s.key)} style={{padding:"3px 10px",borderRadius:"999px",border:on?`1px solid ${s.color}88`:"1px solid #252535",background:on?s.bg:"transparent",color:on?s.color:"#4a4868",fontSize:"0.7rem",fontWeight:on?700:500,cursor:"pointer",fontFamily:"inherit"}}>{s.emoji} {s.label}</button>;
              })}
            </div>
            {/* Tier — multi-select */}
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"6px",alignItems:"center"}}>
              <span style={{color:"#3a3858",fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginRight:"2px"}}>Tier</span>
              {TIERS.map(t => {
                const on = tierFilters.has(t.key);
                return <button key={t.key} onClick={() => toggle(setTierFilters, t.key)} style={{padding:"3px 9px",borderRadius:"5px",border:on?`1px solid ${t.color}88`:`1px solid ${t.color}33`,background:on?t.bg:"transparent",color:on?t.color:t.color+"77",fontSize:"0.7rem",fontWeight:on?900:500,cursor:"pointer",fontFamily:"inherit"}}>{t.key} — {t.label.split("—")[1].trim()}</button>;
              })}
            </div>
            {/* System — multi-select */}
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"6px",alignItems:"center"}}>
              <span style={{color:"#3a3858",fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginRight:"2px"}}>System</span>
              {SYSTEMS_ORDER.filter(s => games.some(g => g.systems.includes(s))).map(sys => {
                const on = systemFilters.has(sys);
                const col = SYSTEM_COLORS[sys] || "#666";
                return <button key={sys} onClick={() => toggle(setSystemFilters, sys)} style={{padding:"2px 8px",borderRadius:"4px",border:on?"none":`1px solid ${col}44`,background:on?col:"transparent",color:on?"#fff":col+"99",fontSize:"0.67rem",fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{sys}</button>;
              })}
            </div>
            {/* Genre — multi-select */}
            <div style={{display:"flex",gap:"4px",flexWrap:"wrap",marginBottom:"6px",alignItems:"center"}}>
              <span style={{color:"#3a3858",fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginRight:"2px"}}>Genre</span>
              {Array.from(new Set(games.flatMap(g => g.tags))).sort().map(tag => {
                const on = tagFilters.has(tag);
                return <button key={tag} onClick={() => toggle(setTagFilters, tag)} style={{padding:"2px 7px",borderRadius:"999px",border:on?"none":"1px solid #252535",background:on?(tagColors[tag]||"#7c6af7"):"transparent",color:on?"#fff":"#4a4868",fontSize:"0.65rem",fontWeight:on?700:500,cursor:"pointer",fontFamily:"inherit"}}>{tag}</button>;
              })}
            </div>
            {/* Time filter + sort */}
            <div style={{display:"flex",gap:"6px",flexWrap:"wrap",alignItems:"center",marginBottom:"8px",paddingTop:"6px",borderTop:"1px solid #1e2030"}}>
              <span style={{color:"#3a3858",fontSize:"0.65rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"}}>Time</span>
              <div style={{display:"flex",gap:"3px",flexWrap:"wrap"}}>
                <button onClick={() => setMaxHours(null)} style={{padding:"2px 8px",borderRadius:"999px",border:maxHours===null?"none":"1px solid #252535",background:maxHours===null?"#252540":"transparent",color:maxHours===null?"#b0addd":"#4a4868",fontSize:"0.67rem",fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Any</button>
                {TIME_BUCKETS.map(b => (
                  <button key={b.max} onClick={() => setMaxHours(b.max)} style={{padding:"2px 8px",borderRadius:"999px",border:maxHours===b.max?"none":"1px solid #252535",background:maxHours===b.max?"#152515":"transparent",color:maxHours===b.max?"#4da87e":"#4a4868",fontSize:"0.67rem",fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{b.label}</button>
                ))}
              </div>
              <div style={{display:"flex",gap:"3px",marginLeft:"auto",flexWrap:"wrap"}}>
                {[{key:"default",label:"Default"},{key:"asc",label:"⏱ Short→Long"},{key:"desc",label:"⏱ Long→Short"}].map(s => (
                  <button key={s.key} onClick={() => setSortBy(s.key)} style={{padding:"2px 9px",borderRadius:"999px",border:sortBy===s.key?"none":"1px solid #252535",background:sortBy===s.key?"#1a1535":"transparent",color:sortBy===s.key?"#7c6af7":"#4a4868",fontSize:"0.67rem",fontWeight:600,cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap"}}>{s.label}</button>
                ))}
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"}}>
              <p style={{color:"#2a2848",fontSize:"0.7rem",margin:0}}>Showing {sorted.length} of {games.length} games</p>
              {hasActiveFilters && <button onClick={clearFilters} style={{padding:"2px 10px",borderRadius:"999px",border:"1px solid #3a2020",background:"transparent",color:"#805050",fontSize:"0.67rem",fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>✕ Clear all filters</button>}
            </div>
          </div>
          <div style={{maxWidth:"900px",margin:"0 auto",padding:"0 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
            {sorted.length===0 && <div style={{textAlign:"center",color:"#3a3858",padding:"40px 0"}}>No games match this filter.</div>}
            {sorted.map(game => (
              <GameCard key={game.title} game={game}
                status={getStatus(game.title)}
                tier={getUserTier(game.title)}
                onStatus={s => setField(game.title, "status", s)}
                onTier={t => setField(game.title, "tier", t)}/>
            ))}
          </div>
        </>
      )}

      {/* TIER LIST VIEW */}
      {view==="Tier List" && (
        <div style={{maxWidth:"900px",margin:"14px auto 0",padding:"0 16px",display:"flex",flexDirection:"column",gap:"8px"}}>
          <p style={{color:"#3a3858",fontSize:"0.74rem",margin:"0 0 4px"}}>Tiers pre-set by recommendation. Override any from the list view or directly here. ★ = best version of each game.</p>
          {TIERS.map(tier => {
            const tierGames = games.filter(g => getEffectiveTier(g.title)===tier.key);
            return (
              <div key={tier.key} style={{display:"flex",borderRadius:"10px",overflow:"hidden",border:`1px solid ${tier.color}33`}}>
                <div style={{width:"46px",flexShrink:0,background:tier.bg,display:"flex",alignItems:"center",justifyContent:"center",borderRight:`1px solid ${tier.color}33`}}>
                  <span style={{fontSize:"1.3rem",fontWeight:900,color:tier.color}}>{tier.key}</span>
                </div>
                <div style={{flex:1,background:"#0f1018",padding:"7px 9px",display:"flex",flexDirection:"column",gap:"5px"}}>
                  {tierGames.length===0
                    ? <div style={{color:"#2a2848",fontSize:"0.72rem",padding:"8px 4px",fontStyle:"italic"}}>No games in this tier</div>
                    : tierGames.map(game => (
                        <GameCard key={game.title} game={game}
                          status={getStatus(game.title)}
                          tier={getUserTier(game.title)}
                          onStatus={s => setField(game.title, "status", s)}
                          onTier={t => setField(game.title, "tier", t)}
                          compact/>
                      ))
                  }
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p style={{textAlign:"center",color:"#1a1a30",fontSize:"0.66rem",marginTop:"28px"}}>Hours via HowLongToBeat · Changes save automatically</p>
    </div>
  );
}
