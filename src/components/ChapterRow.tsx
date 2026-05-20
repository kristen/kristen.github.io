import type { ChapterItem } from '../types';
import { SubItemList } from './SubItemList';

interface Props {
  item: ChapterItem;
  done: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function ChapterRow({ item, done, onToggle }: Props) {
  const isDone = !!done[item.id];
  const cls = ['ch-row', isDone ? 'done' : '', item.cls || ''].filter(Boolean).join(' ');

  return (
    <div className={cls} id={item.id}>
      <div className="ch-main">
        <div className="ch-header" onClick={e => { e.stopPropagation(); onToggle(item.id); }}>
          <div className="ch-check">
            {isDone && <i className="ti ti-check" aria-hidden="true" />}
          </div>
          <div className="ch-title">
            <span className="ch-num">{item.num}</span>
            <span className="ch-title-text">{item.name}</span>
            {item.badge && (
              <span className={`badge ${item.badge}`}>{item.badgeText}</span>
            )}
          </div>
        </div>
        <div style={{ paddingLeft: 26 }}>
          {item.warns && item.warns.length > 0 && (
            <div className="tag-row">
              {item.warns.map((w, i) => (
                <div key={i} className="tag warn">
                  <i className="ti ti-alert-triangle" aria-hidden="true" />
                  {w}
                </div>
              ))}
            </div>
          )}
          <SubItemList chapterId={item.id} labels={item.recruits ?? []} keyPrefix="_recruit" variant="recruit" done={done} onToggle={onToggle} />
          <SubItemList chapterId={item.id} labels={item.items ?? []} keyPrefix="_item" variant="item" done={done} onToggle={onToggle} />
          <SubItemList chapterId={item.id} labels={item.steal ?? []} keyPrefix="_steal" variant="steal" done={done} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}
