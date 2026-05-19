interface Props {
  chapterId: string;
  labels: string[];
  keyPrefix: string;
  variant: 'recruit' | 'item' | 'steal';
  done: Record<string, boolean>;
  onToggle: (key: string) => void;
}

function singularizeSteal(name: string): string {
  if (/ies$/i.test(name)) return name.replace(/ies$/i, 'y');
  if (/s$/i.test(name) && !/ss$/i.test(name)) return name.replace(/s$/i, '');
  return name;
}

function expandStealEntry(s: string): string[] {
  s = s.trim();
  if (/infinite/i.test(s))
    return s.includes('farm') ? [s] : ['Vulneraries (infinite — farm as needed)'];
  const m = s.match(/^(.+?)\s*[×x](\d+)(?:\s+.+)?$/i);
  if (m) {
    const base = singularizeSteal(m[1].trim());
    const n = parseInt(m[2], 10);
    return Array.from({ length: n }, (_, i) => `${base} (steal ${i + 1}/${n})`);
  }
  if (/\(|from\b/i.test(s)) return [s];
  return [`${s} (steal)`];
}

function expandStealList(arr: string[]): string[] {
  return arr.flatMap(expandStealEntry);
}

export function SubItemList({ chapterId, labels, keyPrefix, variant, done, onToggle }: Props) {
  const expanded = variant === 'steal' ? expandStealList(labels) : labels;
  if (!expanded.length) return null;

  const showLabel = variant === 'steal' || variant === 'recruit';
  const sectionLabel = variant === 'steal' ? 'Steal' : 'Recruit';
  const cls = 'sub-items' + (variant === 'steal' ? ' steal-items' : variant === 'recruit' ? ' recruit-items' : '');

  return (
    <>
      {showLabel && <div className="sub-section-label">{sectionLabel}</div>}
      <div className={cls}>
        {expanded.map((label, idx) => {
          const key = chapterId + keyPrefix + idx;
          const checked = !!done[key];
          return (
            <div
              key={key}
              className="sub-item"
              onClick={e => { e.stopPropagation(); onToggle(key); }}
            >
              <div className={'sub-check' + (checked ? ' on' : '')}>
                {checked && <i className="ti ti-check" aria-hidden="true" />}
              </div>
              <span className={'sub-label' + (checked ? ' on' : '')}>{label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
