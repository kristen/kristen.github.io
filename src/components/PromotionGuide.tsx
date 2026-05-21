import type { PromotionEntry } from '../types';

interface Props {
  entries: PromotionEntry[];
  done: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export function PromotionGuide({ entries, done, onToggle }: Props) {
  return (
    <div className="promo-guide">
      <div className="tip-box" style={{ marginBottom: 16 }}>
        <b>Promotion items:</b> Check off a unit once you've used their item. Each item type promotes
        specific classes — see the list under each card. Some items have conditional availability
        (end-of-chapter rewards, steals); the count shown is the maximum for a full run.
      </div>
      <div className="promo-grid">
        {entries.map((entry) => (
          <div key={entry.item} className="promo-card">
            <div className="promo-card-header">
              <div className="promo-item-name">{entry.item}</div>
              <div className="promo-count">{entry.count} available</div>
            </div>
            <ul className="promo-promotes">
              {entry.promotes.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="promo-units">
              {entry.units.map((unit) => {
                const id = `promo:${entry.item}:${unit.name}`;
                const checked = !!done[id];
                return (
                  <div
                    key={unit.name}
                    className={`promo-unit-row${checked ? ' is-done' : ''}`}
                    onClick={() => onToggle(id)}
                  >
                    <div className={`sub-check${checked ? ' on' : ''}`}>
                      {checked && '✓'}
                    </div>
                    <div className="promo-unit-info">
                      <span className="promo-priority">{unit.priority}</span>
                      <span className="promo-unit-name-text">{unit.name}</span>
                      <span className="promo-unit-cls">{unit.cls}</span>
                    </div>
                    <div className="promo-unit-note">{unit.note}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
