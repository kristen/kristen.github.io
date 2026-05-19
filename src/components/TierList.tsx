import type { Tier } from '../types';

interface Props {
  tiers: Tier[];
  philosophy?: string;
  tip?: string;
}

export function TierList({ tiers, philosophy, tip }: Props) {
  return (
    <>
      {philosophy && (
        <div className="tip-box" dangerouslySetInnerHTML={{ __html: philosophy }} />
      )}
      {tiers.map((tier, i) => (
        <div key={tier.level}>
          <div className={`section-divider${i === 0 ? ' first' : ''}`}>{tier.label}</div>
          <div className={`tier-row tier-${tier.level}`}>
            <div className="tier-label">{tier.level.toUpperCase()}</div>
            <div className="tier-units">
              {tier.units.map((u, j) => (
                <div key={j} className={`unit-chip${u.cls ? ' ' + u.cls : ''}`}>
                  {u.name}
                  <small>{u.subtitle}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {tip && (
        <div className="tip-box" style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: tip }} />
      )}
    </>
  );
}
