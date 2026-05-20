import { AuthButton } from './AuthButton';

interface Card {
  game: string;
  title: string;
  description: string;
  href: string;
}

const cards: Card[] = [
  {
    game: 'Fire Emblem 6',
    title: 'The Binding Blade',
    description: 'Chapter checklist with recruits, steals, and route splits.',
    href: '#/guide/fe6',
  },
  {
    game: 'Fire Emblem 7',
    title: 'The Blazing Blade',
    description: 'Chapter checklist with recruits, steals, and route splits.',
    href: '#/guide/fe7',
  },
  {
    game: 'Fire Emblem 8',
    title: 'The Sacred Stones',
    description: 'Chapter checklist with recruits, Eirika & Ephraim route split, and tier list.',
    href: '#/guide/fe8',
  },
  {
    game: 'Fire Emblem 11',
    title: 'Shadow Dragon',
    description: 'Gaiden chapter checklist with recruits and unit tier list.',
    href: '#/guide/fe11',
  },
  {
    game: 'Nintendo',
    title: 'Games Worth Your Time',
    description: 'Tier list and tracker across all Nintendo eras. No platformers.',
    href: '#/nintendo-games',
  },
];

export function Landing() {
  return (
    <div className="landing">
      <header>
        <h1>Fire Emblem Guides</h1>
        <p>Personal chapter checklists &amp; notes</p>
        <div className="landing-auth">
          <AuthButton />
        </div>
      </header>
      <div className="cards">
        {cards.map(card => (
          <a key={card.title} className="card" href={card.href}>
            <div className="card-game">{card.game}</div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="card-arrow">Open guide →</div>
          </a>
        ))}
      </div>
    </div>
  );
}
