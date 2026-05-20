import type { Tier } from '../types';
import { isUnitRecruited } from '../utils/recruitedNames.js';

interface Props {
  tiers: Tier[];
  philosophy?: string;
  tip?: string;
  recruitedNames?: Set<string>;
}

export function TierList({ tiers, philosophy, tip, recruitedNames }: Props) {
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
              {tier.units.map((u, j) => {
                const isRecruited = !!recruitedNames && isUnitRecruited(u.name, recruitedNames);
                return (
                  <div key={j} className={`unit-chip${u.cls ? ' ' + u.cls : ''}`}>
                    {u.name}
                    {isRecruited && <i className="ti ti-check unit-recruited-icon" aria-hidden="true" />}
                    <small>{u.subtitle}</small>
                  </div>
                );
              })}
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
