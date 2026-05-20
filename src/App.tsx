import { Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { GuidePage } from './components/GuidePage';
import { NintendoGames } from './components/NintendoGames';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/guide/:guideKey" element={<GuidePage />} />
      <Route path="/nintendo-games" element={<NintendoGames />} />
    </Routes>
  );
}
