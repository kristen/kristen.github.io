import { useParams } from 'react-router-dom';
import { GUIDES } from '../guides';
import { GuideShell } from './GuideShell';

export function GuidePage() {
  const { guideKey } = useParams<{ guideKey: string }>();
  const config = guideKey ? GUIDES[guideKey] : undefined;

  if (!config) {
    return (
      <div style={{ padding: 48, textAlign: 'center', color: 'var(--text-secondary)' }}>
        Guide not found.
      </div>
    );
  }

  return <GuideShell config={config} />;
}
