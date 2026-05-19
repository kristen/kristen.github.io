import type { SplitItem } from '../types';

interface Props {
  item: SplitItem;
  splitLabel: string;
}

export function SplitCard({ item, splitLabel }: Props) {
  return (
    <div className="callout split-card">
      <h4>{item.title}</h4>
      <div className="split-opts">
        {item.opts.map((o, i) => (
          <div key={i} className="split-opt">
            <div className="split-opt-title">
              <span className={`badge ${o.badge}`}>{o.label}</span>
              {o.cond}
            </div>
            <p>{splitLabel}: <b>{o.units}</b></p>
            <p className="note">{o.note}</p>
          </div>
        ))}
      </div>
      <div className="excl-row">
        {item.excl.map((e, i) => (
          <div key={i} className="excl-chip">{e}</div>
        ))}
      </div>
    </div>
  );
}
