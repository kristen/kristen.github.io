export const ITEMS = [
  {
    "type": "save",
    "title": "Gaiden chapter system — how to unlock optional maps",
    "body": "End any chapter with <b>≤15 units alive in your army</b> to unlock the next Gaiden chapter. Gaiden chapters contain rare items and exclusive recruits — most importantly Wendell (7x), Midia &amp; Astram (16x), and Xane &amp; Tiki (19x). <b>Plan your sacrifices</b>: recruit Tier D units (Wrys, Castor, Dolph, Macellan, Roger, Matthis, Lorenz, Frey) as deliberate casualties when you need to drop below 16 units. Never waste stat-booster resources on them."
  },
  {
    "type": "ch",
    "id": "p1",
    "num": "Prologue 1",
    "name": "The Altean League",
    "recruits": [
      "Marth, Jagen, Cain, Abel & Frey — Automatically, turn 1"
    ],
    "items": [],
    "warns": [
      "One unit must be left behind as a decoy at chapter end so Marth can escape — Frey is the recommended sacrifice; he has the worst long-term potential and rejoins in Ch. 18 underleveled"
    ]
  },
  {
    "type": "ch",
    "id": "p2",
    "num": "Prologue 2",
    "name": "The Fight at Galder",
    "recruits": [
      "Gordin — Automatically, turn 1 (Archer)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "p3",
    "num": "Prologue 3",
    "name": "The Long Road",
    "recruits": [
      "Wrys — Automatically (Cleric; Tier D, keep only for Gaiden unit-count padding)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "p4",
    "num": "Prologue 4",
    "name": "Embarkation",
    "recruits": [
      "Caeda — Automatically (Pegasus Knight; joins with Wing Spear — effective vs. armor and cavalry)"
    ],
    "items": [
      "Wing Spear (Caeda joins with it — effective vs. armor and cavalry)"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c1",
    "num": "Ch. 1",
    "name": "Marth Embarks",
    "recruits": [
      "Draug — Automatically (Armor Knight; extremely low speed — reclass to Paladin to fix mobility)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c2",
    "num": "Ch. 2",
    "name": "The Pirates of Galder",
    "recruits": [
      "Ogma — Automatically (Mercenary; best base stats of any early-game unit)"
    ],
    "items": [],
    "warns": [
      "Julian is your only thief — keep him alive and use him for every chest and door in the game"
    ]
  },
  {
    "type": "ch",
    "id": "c3",
    "num": "Ch. 3",
    "name": "A Brush in the Teeth",
    "recruits": [
      "Navarre — Talk with Caeda (enemy Myrmidon; blazing speed; talk before he walks into your units)",
      "Lena — NPC ally (Cleric; keep her alive)",
      "Julian — NPC ally; appears with Lena (Thief; your only unit for chests and doors)",
      "Castor — Talk with Caeda (enemy Hunter; Tier D, sacrifice candidate)"
    ],
    "items": [],
    "warns": [
      "Lena and Julian start as NPC allies in danger — rush Caeda toward them to prevent deaths",
      "Talk to Navarre with Caeda before he walks into your front line"
    ]
  },
  {
    "type": "ch",
    "id": "c4",
    "num": "Ch. 4",
    "name": "Battle of the Pass",
    "recruits": [
      "Dolph — Talk with Caeda (enemy Armor Knight; Tier D, sacrifice candidate)",
      "Macellan — Talk with Caeda (enemy Armor Knight; Tier D, sacrifice candidate)"
    ],
    "items": [],
    "warns": [
      "Dolph and Macellan are armored enemies — have Caeda reach them before your combat units do"
    ]
  },
  {
    "type": "ch",
    "id": "c5",
    "num": "Ch. 5",
    "name": "Champions of Aurelis",
    "recruits": [
      "Roger — Talk with Caeda (enemy Cavalier; Tier D, sacrifice candidate)",
      "Merric — Automatically (Mage; joins with Excalibur — effective vs. fliers)",
      "Matthis — Talk with Lena or Caeda (enemy Cavalier; Lena's brother; Tier D)"
    ],
    "items": [
      "Excalibur (Merric joins with it — effective vs. fliers)"
    ],
    "warns": [
      "Roger and Matthis are enemies — have Caeda or Lena talk to them before your units attack"
    ]
  },
  {
    "type": "ch",
    "id": "c6",
    "num": "Ch. 6",
    "name": "Fire Emblem",
    "recruits": [
      "Bantu — Automatically (Manakete; Tier C — keep alive to recruit Tiki in Gaiden 19x)"
    ],
    "items": [],
    "warns": [
      "Keep Bantu alive for the ENTIRE game — he is the only way to recruit Tiki in Gaiden 19x. Never invest EXP in him, but never let him die."
    ]
  },
  {
    "type": "ch",
    "id": "c7",
    "num": "Ch. 7",
    "name": "Lefcandith Gauntlet",
    "recruits": [],
    "items": [],
    "warns": [
      "End this chapter with ≤15 units alive to unlock Gaiden 7x — Wendell, a free pre-promoted Sage, joins there"
    ]
  },
  {
    "type": "ch",
    "id": "c7x",
    "num": "Gaiden 7x",
    "name": "Wendell's Prison",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "recruits": [
      "Wendell — Automatically (already promoted Sage; usable immediately; low growths)"
    ],
    "items": [],
    "warns": [
      "Only available if you ended Ch. 7 with ≤15 units alive"
    ]
  },
  {
    "type": "ch",
    "id": "c8",
    "num": "Ch. 8",
    "name": "Port Warren",
    "recruits": [
      "Hardin — Automatically (Cavalier; 100% HP growth and 60% Def growth — one of the best units in the game)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c9",
    "num": "Ch. 9",
    "name": "The Pyrathi Dragon",
    "recruits": [],
    "items": [],
    "warns": [
      "Manakete boss — Marth's Rapier is not effective vs. manaketes; bring silver weapons or forge steel weapons for reliable damage"
    ]
  },
  {
    "type": "ch",
    "id": "c10",
    "num": "Ch. 10",
    "name": "Princess Minerva",
    "recruits": [
      "Maria — Rescue from the castle interior (Bishop; Minerva's sister; needed to recruit Minerva)",
      "Minerva — Talk with Palla or Maria (enemy Dracoknight boss; outstanding pre-promote, joins promoted)",
      "Palla — Automatically joins alongside Minerva (Pegasus Knight)",
      "Catria — Automatically joins alongside Minerva (Pegasus Knight; better speed growth than Palla)"
    ],
    "items": [],
    "warns": [
      "Reach Maria inside the castle and rescue her before she is killed",
      "Talk to Minerva with Palla or Maria — she will not join otherwise; she is the chapter boss"
    ]
  },
  {
    "type": "ch",
    "id": "c11",
    "num": "Ch. 11",
    "name": "Knorda Market",
    "recruits": [
      "Linde — Automatically (Mage; joins with Aura — effective vs. cavalry; best magic unit in the game)"
    ],
    "items": [
      "Aura (Linde joins with it — effective vs. cavalry)"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c12",
    "num": "Ch. 12",
    "name": "The Ageless Palace",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c13",
    "num": "Ch. 13",
    "name": "The Wooden Cavalry",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c14",
    "num": "Ch. 14",
    "name": "Land of Sorrow",
    "recruits": [
      "Jeorge — Talk with any unit (already promoted Sniper; joins with Parthia — grants +5 Res when equipped)",
      "Lorenz — Talk with Caeda (old General; Tier D, recruit only for unit-count management)"
    ],
    "items": [
      "Parthia (Jeorge joins with it — unique bow, grants +5 Res when equipped)"
    ],
    "warns": [
      "Lorenz is a sacrifice candidate — recruit him only to have a spare unit for Gaiden unlocks"
    ]
  },
  {
    "type": "ch",
    "id": "c15",
    "num": "Ch. 15",
    "name": "An Oasis of Magic",
    "recruits": [],
    "items": [],
    "warns": [
      "End this chapter with ≤15 units alive to unlock Gaiden 16x — Midia and Astram are rescued there; both are solid units"
    ]
  },
  {
    "type": "ch",
    "id": "c16x",
    "num": "Gaiden 16x",
    "name": "Khadein",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "recruits": [
      "Midia — Rescue the NPC prisoner (Paladin; reliable mounted unit)",
      "Astram — Rescue the NPC prisoner (Hero; excellent base stats)"
    ],
    "items": [],
    "warns": [
      "Only available if you ended Ch. 15 with ≤15 units alive",
      "Midia and Astram are prisoners in the map — reach them before they die"
    ]
  },
  {
    "type": "ch",
    "id": "c16",
    "num": "Ch. 16",
    "name": "The Battle for Altea",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c17",
    "num": "Ch. 17",
    "name": "Star and Savior",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c18",
    "num": "Ch. 18",
    "name": "The Sable Order",
    "recruits": [
      "Frey — Returns (Cavalier; separated since Prologue 1 and severely underleveled; Tier D, sacrifice candidate)"
    ],
    "items": [],
    "warns": [
      "End this chapter with ≤15 units alive to unlock Gaiden 19x — this is the most important gaiden (Xane and Tiki). Bantu MUST still be alive.",
      "Frey returns with very low stats from missing the entire mid-game; useful only as a Gaiden-unlock sacrifice"
    ]
  },
  {
    "type": "ch",
    "id": "c19x",
    "num": "Gaiden 19x",
    "name": "The Dragon's Altar",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "recruits": [
      "Xane — Automatically (Chameleon; copies any deployed ally's class and stats each turn — unique utility)",
      "Tiki — Have Bantu talk to her (Manakete; 100% HP growth; uses Divinestone; one of the best late-game units)"
    ],
    "items": [
      "Divinestone (Tiki joins with it)"
    ],
    "warns": [
      "Only available if you ended Ch. 18 with ≤15 units alive",
      "Bantu must be alive and deployed — walk Bantu up to Tiki and have him talk to her to recruit her",
      "Missing this gaiden means permanently missing Xane and Tiki, the two strongest late-game units"
    ]
  },
  {
    "type": "ch",
    "id": "c19",
    "num": "Ch. 19",
    "name": "Return of the Prince",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c20",
    "num": "Ch. 20",
    "name": "Crusade for Gra",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c21",
    "num": "Ch. 21",
    "name": "Clash in Macedon",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c22",
    "num": "Ch. 22",
    "name": "A Knight-Filled Sky",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c23",
    "num": "Ch. 23",
    "name": "The Palace of Valhalla",
    "recruits": [],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c24",
    "num": "Ch. 24",
    "name": "The Dragonkin Realm",
    "recruits": [],
    "items": [],
    "warns": [
      "Medeus, the Shadow Dragon, can only be defeated by Marth wielding the Falchion — ensure Marth has it equipped for the final battle"
    ]
  }
];
