import { expandStealList } from '../utils/stealItems.js';

interface Props {
  chapterId: string;
  labels: string[];
  keyPrefix: string;
  variant: 'recruit' | 'item' | 'steal';
  done: Record<string, boolean>;
  onToggle: (key: string) => void;
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
