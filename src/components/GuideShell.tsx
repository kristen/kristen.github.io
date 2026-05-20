import { useState } from 'react';
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
  const { done, toggle, completedCount, totalCount } = useProgress(config.storageKey, config.items);

  return (
    <div className="guide-shell" style={config.cssVars as React.CSSProperties}>
      {config.extraCss && <style>{config.extraCss}</style>}

      <div className="site-header">
        <h1>{config.title}</h1>
        <p>{config.subtitle}</p>
        <div className="mobile-prog">
          <ProgressBar completed={completedCount} total={totalCount} variant="narrow" />
        </div>
        <div className="auth-slot">
          <AuthButton />
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
        <div className={`col col-chapters${activeTab === 'chapters' ? ' active' : ''}`} id="col-chapters">
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
    </div>
  );
}
