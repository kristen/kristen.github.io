interface Props {
  completed: number;
  total: number;
  variant: 'wide' | 'narrow';
}

export function ProgressBar({ completed, total, variant }: Props) {
  const pct = total > 0 ? Math.round(completed / total * 100) : 0;
  const txt = `${completed} of ${total} chapters complete`;
  const id = variant;
  return (
    <>
      <div className="prog-text" id={`prog-text-${id}`}>{txt}</div>
      <div className="prog-bar-wrap">
        <div className="prog-bar" id={`prog-bar-${id}`} style={{ width: pct + '%' }} />
      </div>
    </>
  );
}
