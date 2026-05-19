import type { ChapterItem } from '../types';
import { ChapterRow } from './ChapterRow';

interface Props {
  pair: ChapterItem[];
  done: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function ChapterPair({ pair, done, onToggle }: Props) {
  return (
    <div className="ch-pair">
      {pair.map(ch => (
        <ChapterRow key={ch.id} item={ch} done={done} onToggle={onToggle} />
      ))}
    </div>
  );
}
