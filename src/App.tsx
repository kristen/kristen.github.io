import { Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { GuidePage } from './components/GuidePage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/guide/:guideKey" element={<GuidePage />} />
    </Routes>
  );
}
