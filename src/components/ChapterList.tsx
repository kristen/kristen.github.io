import type { Item } from '../types';
import { ChapterRow } from './ChapterRow';
import { ChapterPair } from './ChapterPair';
import { SaveCard } from './SaveCard';
import { SplitCard } from './SplitCard';

interface Props {
  items: Item[];
  splitLabel: string;
  tipBox: string;
  done: Record<string, boolean>;
  onToggle: (key: string) => void;
}

export function ChapterList({ items, splitLabel, tipBox, done, onToggle }: Props) {
  return (
    <>
      <div className="tip-box" dangerouslySetInnerHTML={{ __html: tipBox }} />
      <div className="ch-list">
        {items.map((item, idx) => {
          if (item.type === 'ch') {
            return <ChapterRow key={item.id} item={item} done={done} onToggle={onToggle} />;
          }
          if (item.type === 'pair') {
            return <ChapterPair key={idx} pair={item.pair} done={done} onToggle={onToggle} />;
          }
          if (item.type === 'save') {
            return <SaveCard key={idx} title={item.title} body={item.body} />;
          }
          if (item.type === 'split') {
            return <SplitCard key={idx} item={item} splitLabel={splitLabel} />;
          }
          return null;
        })}
      </div>
    </>
  );
}
