import type { ReclassEntry } from '../types';

interface Props {
  entries: ReclassEntry[];
}

export function ReclassGuide({ entries }: Props) {
  return (
    <div className="reclass-guide">
      <div className="tip-box" style={{ marginBottom: 16 }}>
        <b>Reclassing overview:</b> When you reclass, your level resets to 1 in the new class but your accumulated stats carry over — making units with strong base stats or high growths especially powerful when reclassed. The main benefits are new weapon types, movement type changes (especially gaining flying or mounted), and class skill bonuses like Swordmaster's +15 crit.
      </div>
      <div className="reclass-grid">
        {entries.map((entry) => (
          <div key={entry.name} className="reclass-card">
            <div className="reclass-unit-name">{entry.name}</div>
            <div className="reclass-from">Default: {entry.from}</div>
            <ul className="reclass-options">
              {entry.options.map((opt) => (
                <li key={opt.cls}>
                  <span className="reclass-cls">{opt.cls}</span> — {opt.note}
                </li>
              ))}
            </ul>
            <div className="reclass-recommended">{entry.recommended}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
