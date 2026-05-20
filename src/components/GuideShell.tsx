import { useState, useEffect, useRef } from 'react';
import type { GuideConfig } from '../types';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from './ProgressBar';
import { ChapterList } from './ChapterList';
import { TierList } from './TierList';
import { AuthButton } from './AuthButton';

interface Props {
  config: GuideConfig;
}

export function GuideShell({ config }: Props) {
  const [activeTab, setActiveTab] = useState<'chapters' | 'tiers'>('chapters');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const chapColRef = useRef<HTMLDivElement>(null);
  const { done, toggle, completedCount, totalCount } = useProgress(config.storageKey, config.items);

  useEffect(() => {
    const col = chapColRef.current;
    const firstUnchecked = config.items
      .flatMap(item =>
        item.type === 'ch' ? [item.id] :
        item.type === 'pair' ? item.pair.map(p => p.id) : []
      )
      .find(id => !done[id]);
    if (firstUnchecked && col) {
      const el = document.getElementById(firstUnchecked);
      if (el) {
        const elTop = el.getBoundingClientRect().top - col.getBoundingClientRect().top + col.scrollTop;
        col.scrollTo({ top: Math.max(0, elTop - col.clientHeight / 4), behavior: 'smooth' });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const col = chapColRef.current;
    if (!col) return;
    const onScroll = () => setShowScrollTop(col.scrollTop > 300);
    col.addEventListener('scroll', onScroll, { passive: true });
    return () => col.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="guide-shell" style={config.cssVars as React.CSSProperties}>
      {config.extraCss && <style>{config.extraCss}</style>}

      <div className="site-header">
        <h1>{config.title}</h1>
        <p>{config.subtitle}</p>
        <div className="auth-slot">
          <AuthButton />
        </div>
        <div className="mobile-prog">
          <ProgressBar completed={completedCount} total={totalCount} variant="narrow" />
        </div>
      </div>

      <div className="tabs-mobile">
        <button
          className={`tab-btn${activeTab === 'chapters' ? ' active' : ''}`}
          onClick={() => setActiveTab('chapters')}
        >
          Chapters
        </button>
        <button
          className={`tab-btn${activeTab === 'tiers' ? ' active' : ''}`}
          onClick={() => setActiveTab('tiers')}
        >
          Tier List
        </button>
      </div>

      <div className="two-col">
        <div className={`col col-chapters${activeTab === 'chapters' ? ' active' : ''}`} id="col-chapters" ref={chapColRef}>
          <div className="col-head">
            <div className="col-head-title">Chapters &amp; Routes</div>
            <ProgressBar completed={completedCount} total={totalCount} variant="wide" />
          </div>
          <div className="col-body">
            <ChapterList
              items={config.items}
              splitLabel={config.splitLabel}
              tipBox={config.tipBox}
              done={done}
              onToggle={toggle}
            />
          </div>
        </div>

        <div className={`col col-tiers${activeTab === 'tiers' ? ' active' : ''}`} id="col-tiers">
          <div className="col-head">
            <div className="col-head-title">Unit Tier List</div>
          </div>
          <div className="col-body" id="tier-body">
            <TierList
              tiers={config.tiers}
              philosophy={config.tierPhilosophy}
              tip={config.tierTip}
            />
          </div>
        </div>
      </div>
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => chapColRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
