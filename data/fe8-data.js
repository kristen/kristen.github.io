window.ITEMS = [
  {
    "type": "ch",
    "id": "prologue",
    "num": "Prologue",
    "name": "Land of Sacred Stones",
    "recruits": [
      "Eirika — Automatically, start",
      "Seth — Automatically, start"
    ],
    "items": [
      "Vulnerary (Eirika starts with one)"
    ],
    "warns": [
      "Tutorial map — Seth handles everything; keep Eirika safe"
    ]
  },
  {
    "type": "ch",
    "id": "c1",
    "num": "Ch. 1",
    "name": "Escape!",
    "recruits": [
      "Franz — Automatically, start"
    ],
    "items": [],
    "warns": [
      "Use Seth aggressively to clear enemies and escort Eirika to the gate"
    ]
  },
  {
    "type": "ch",
    "id": "c2",
    "num": "Ch. 2",
    "name": "The Protected",
    "recruits": [
      "Gilliam — Joins from the west as an ally NPC",
      "Vanessa — Peg. Knight; arrives as reinforcement from the east"
    ],
    "items": [
      "Vulnerary (village)"
    ],
    "warns": [
      "Vanessa has flying utility — deploy her in every chapter from here on"
    ]
  },
  {
    "type": "ch",
    "id": "c3",
    "num": "Ch. 3",
    "name": "The Bandits of Borgo",
    "recruits": [
      "Moulder — NPC ally; joins automatically after surviving",
      "Ross — Visit the house with Eirika (or nearby); he and Garcia join together",
      "Garcia — Joins with Ross; strong Fighter with good growths"
    ],
    "items": [
      "Hatchet (village)"
    ],
    "warns": [
      "Ross is a Journeyman trainee — give him early kills; his double-promotion at level 10 is worth the investment"
    ]
  },
  {
    "type": "ch",
    "id": "c4",
    "num": "Ch. 4",
    "name": "Ancient Horrors",
    "recruits": [
      "Neimi — Visit the eastern house",
      "Colm — Enemy Thief; have Neimi (or Eirika) talk to him before he moves away"
    ],
    "items": [
      "Chest Key (village)"
    ],
    "warns": [
      "Do not kill Colm — he is your only early thief",
      "Monsters (Revenants) are introduced here; magic and critical hits are effective"
    ]
  },
  {
    "type": "ch",
    "id": "c5",
    "num": "Ch. 5",
    "name": "The Empire's Reach",
    "recruits": [
      "Natasha — NPC ally Cleric; rescue her and keep her alive",
      "Joshua — Enemy Myrmidon; NATASHA must talk to him (he is a hired guard who can be persuaded)",
      "Artur — NPC ally Monk; arrives from the north"
    ],
    "items": [
      "Elfire (village)"
    ],
    "warns": [
      "CRITICAL: Only Natasha can recruit Joshua — position her to intercept him before he closes in on enemies",
      "Do not kill Joshua; he becomes one of the best myrmidons in the game"
    ]
  },
  {
    "type": "ch",
    "id": "c6",
    "num": "Ch. 6",
    "name": "Victims of War",
    "recruits": [
      "Lute — Visit the village; she joins automatically"
    ],
    "items": [
      "Chest contents — bring Colm for the locked chests"
    ],
    "warns": [
      "Lute has the highest magic growth in the game but needs EXP to get going"
    ]
  },
  {
    "type": "ch",
    "id": "c7",
    "num": "Ch. 7",
    "name": "Silent Contenders",
    "recruits": [
      "Tana — Frelian Peg. Knight; rescued or joins as story NPC ally after the chapter"
    ],
    "items": [],
    "warns": [
      "Tana is needed to recruit Cormag on Ephraim's route later — keep her trained"
    ]
  },
  {
    "type": "save",
    "title": "Save before Ch. 8 — route split at end of this chapter",
    "body": "After Ch. 8 you permanently choose <b>Eirika's route</b> or <b>Ephraim's route</b> for this save file (Ch. 9–14 differ completely). <b>Ephraim's route is recommended for first-time players</b> — it is the only route with Tethys, the game's sole dancer. Duplicate your save here to experience both routes. The Tower of Valni also opens on the world map around this point — use it to grind skirmishes and levels at any time."
  },
  {
    "type": "ch",
    "id": "c8",
    "num": "Ch. 8",
    "name": "It's a Trap!",
    "recruits": [
      "Ephraim — Story join; Eirika and Ephraim reunite",
      "Kyle — Story join with Ephraim (Cavalier, balanced growths)",
      "Forde — Story join with Ephraim (Cavalier, speed-focused)"
    ],
    "items": [],
    "warns": [
      "Ephraim's party bursts in as the chapter resolves — no action needed to recruit them",
      "Choose your route when prompted after the chapter ends"
    ]
  },
  {
    "type": "split",
    "title": "Route split — Eirika's route vs. Ephraim's route",
    "opts": [
      {
        "badge": "eirika",
        "label": "Eirika's Route",
        "cond": "Choose \"Eirika\" after Ch. 8",
        "units": "Marisa (Myrmidon, Ch. 9) — Eirika route exclusive",
        "note": "Follows Eirika through Jehanna. Gerik + Marisa are strong. No dancer available on this route."
      },
      {
        "badge": "ephraim",
        "label": "Ephraim's Route",
        "cond": "Choose \"Ephraim\" after Ch. 8",
        "units": "Duessel (Great Knight) · Cormag (Wyvern) · Tethys (Dancer) · Ewan (Trainee) — Ephraim route exclusive",
        "note": "Follows Ephraim assaulting Grado. Tethys is irreplaceable dancer utility. Strongly recommended for first run."
      }
    ],
    "excl": [
      "Marisa — Eirika route only",
      "Duessel / Cormag / Tethys / Ewan — Ephraim route only"
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c9e",
        "num": "Ch. 9",
        "name": "Distant Blade",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "recruits": [
          "Tana — Joins as NPC/story ally (if not already recruited)",
          "Gerik — NPC mercenary; joins automatically as ally",
          "Marisa — Enemy Myrmidon; Gerik must talk to her (she is a Grado mercenary, Gerik's commander)"
        ],
        "items": [
          "Angelic Robe (village)"
        ],
        "warns": [
          "Position Gerik near Marisa quickly — she moves and will advance into your lines",
          "Do not kill Marisa; she is an excellent Swordmaster"
        ]
      },
      {
        "id": "c9p",
        "num": "Ch. 9",
        "name": "Fort Rigwald",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "recruits": [
          "Duessel — Story join; the Obsidian, a veteran Grado general who refuses to fight his old allies",
          "Tana — Joins as NPC/story ally (escaped to find Ephraim)"
        ],
        "items": [],
        "warns": [
          "Duessel has excellent base stats as a Great Knight — deploy him immediately",
          "Keep Tana alive and trained; she is required to recruit Cormag in Ch. 10"
        ]
      }
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c10e",
        "num": "Ch. 10",
        "name": "Revolt at Carcino",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "recruits": [
          "Innes — Story join; Frelian Prince arrives with reinforcements"
        ],
        "items": [
          "Chest contents — use Colm"
        ],
        "warns": [
          "Innes is a Ranger (promotes to Sniper or Ranger); his high Skill and Spd make him reliable"
        ]
      },
      {
        "id": "c10p",
        "num": "Ch. 10",
        "name": "Turning Traitor",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "recruits": [
          "Cormag — Enemy Wyvern Rider; TANA must talk to him (his brother Glen was killed on enemy orders and he seeks new purpose)"
        ],
        "items": [],
        "warns": [
          "Only Tana can recruit Cormag — have her intercept him before he engages your units",
          "Do not kill Cormag; he is a solid Wyvern Knight"
        ]
      }
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c11e",
        "num": "Ch. 11",
        "name": "Creeping Darkness",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "recruits": [
          "Amelia — Enemy Soldier (green-armored); have Eirika or Franz talk to her (she joined Grado out of necessity and can be convinced to defect)"
        ],
        "items": [],
        "warns": [
          "Amelia is a Recruit trainee — she double-promotes at level 10; worthwhile investment if started here"
        ]
      },
      {
        "id": "c11p",
        "num": "Ch. 11",
        "name": "Phantom Ship",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "items": [],
        "warns": [
          "Ship map — terrain limits movement; position your units carefully to avoid being surrounded",
          "Pirate-class enemies are common here; watch Eirika's and mage units' positioning"
        ]
      }
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c12e",
        "num": "Ch. 12",
        "name": "Village of Silence",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "recruits": [
          "L'Arachel — Flamboyant Troubadour; arrives as NPC; joins with Dozla after the chapter",
          "Dozla — Joins with L'Arachel (Berserker; joins too late to be useful in combat)",
          "Rennac — Rogue; L'Arachel can recruit him for free, otherwise Eirika must pay 10,000G"
        ],
        "items": [
          "Master Seal (chest — universal promotion item, use on anyone)"
        ],
        "warns": [
          "Have L'Arachel talk to Rennac to avoid paying the 10,000G fee",
          "Rennac is a Rogue (opens doors/chests without keys) — keep Colm or Rennac on your team for loot"
        ]
      },
      {
        "id": "c12p",
        "num": "Ch. 12",
        "name": "Landing at Taizel",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "recruits": [
          "Tethys — Dancer; joins as NPC ally (ONLY dancer in FE8 — protect her at all costs)",
          "Ewan — Pupil trainee; visit the house (Tethys's companion and student)",
          "Amelia — Enemy Soldier; Ephraim or Duessel talks to her"
        ],
        "items": [],
        "warns": [
          "TETHYS IS IRREPLACEABLE — she is the only dancer in the entire game; never put her in danger",
          "Ewan is a Pupil trainee who can become a Summoner (unique class that summons Phantom units) via Shaman promotion path"
        ]
      }
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c13e",
        "num": "Ch. 13",
        "name": "Hamill Canyon",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "recruits": [
          "Gerik — If not recruited in Ch. 9, he joins here as an NPC ally"
        ],
        "items": [],
        "warns": []
      },
      {
        "id": "c13p",
        "num": "Ch. 13",
        "name": "Fluorspar's Oath",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "recruits": [
          "L'Arachel — Joins here on Ephraim's route (with Dozla and Rennac; same recruit conditions apply)"
        ],
        "items": [],
        "warns": [
          "L'Arachel recruit note: have her talk to Rennac to avoid the 10,000G fee"
        ]
      }
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c14e",
        "num": "Ch. 14",
        "name": "Queen of White Dunes",
        "cls": "is-eirika",
        "badge": "eirika",
        "badgeText": "Eirika",
        "items": [
          "Warp (hidden — check desert tile; move mounted/flying units over sand to search)"
        ],
        "warns": [
          "Desert map — search sand tiles for hidden items including Warp",
          "Final Eirika-route chapter; routes converge at Ch. 15"
        ]
      },
      {
        "id": "c14p",
        "num": "Ch. 14",
        "name": "Father and Son",
        "cls": "is-ephraim",
        "badge": "ephraim",
        "badgeText": "Ephraim",
        "items": [],
        "warns": [
          "Final Ephraim-route chapter; routes converge at Ch. 15"
        ]
      }
    ]
  },
  {
    "type": "ch",
    "id": "c15",
    "num": "Ch. 15",
    "name": "Scorched Sand",
    "recruits": [
      "Knoll — Enemy Shaman held in the prison; have Eirika or Ephraim talk to him to recruit"
    ],
    "items": [
      "Speedwings (village)"
    ],
    "warns": [
      "Knoll can become a Summoner — a unique class that summons Phantom units to block passages; niche but fun",
      "Both routes converge here — all of your route-specific characters carry forward"
    ]
  },
  {
    "type": "ch",
    "id": "c16",
    "num": "Ch. 16",
    "name": "Ruled by Madness",
    "recruits": [
      "Saleh — Story join; Sage from Caer Pelyn with excellent base magic",
      "Myrrh — Story join; Great Dragon Manakete with a powerful but limited Dragonstone"
    ],
    "items": [
      "Physic (village)"
    ],
    "warns": [
      "Myrrh's Dragonstone has limited uses — do not waste it on weak enemies",
      "Use a Hammerne staff on Myrrh's stone when it wears low"
    ]
  },
  {
    "type": "ch",
    "id": "c17",
    "num": "Ch. 17",
    "name": "River of Regrets",
    "items": [
      "Elixir (village)"
    ],
    "warns": [
      "Prepare your team — the game ramps up from here",
      "Stock healing staves and stat-booster items before advancing"
    ]
  },
  {
    "type": "ch",
    "id": "c18",
    "num": "Ch. 18",
    "name": "Two Faces of Evil",
    "items": [],
    "warns": [
      "Two back-to-back maps (Eirika and Ephraim split up then rejoin) — ensure both halves of your team are stocked with healing"
    ]
  },
  {
    "type": "ch",
    "id": "c19",
    "num": "Ch. 19",
    "name": "Last Hope",
    "items": [
      "Garm — legendary axe; dropped by the boss or obtained at end of chapter"
    ],
    "warns": [
      "Boss carries Garm (Sacred Twins weapon) — kill or steal it",
      "Prepare for the final stretch; use remaining stat boosters now"
    ]
  },
  {
    "type": "ch",
    "id": "c20",
    "num": "Ch. 20",
    "name": "Darkling Woods",
    "items": [],
    "warns": [
      "Dense forest terrain — flying and mounted units are slowed; adjust formation",
      "Lyon is involved in this chapter; a critical story beat before the finale"
    ]
  },
  {
    "type": "ch",
    "id": "c21",
    "num": "Ch. 21",
    "name": "The Last Stand",
    "items": [
      "Gleipnir — legendary dark tome (dropped/obtained)",
      "Latona — legendary light staff"
    ],
    "warns": [
      "Use all remaining stat boosters before the Final chapter",
      "Eirika wields Sieglinde, Ephraim wields Siegmund — both received via story events before the finale"
    ]
  },
  {
    "type": "ch",
    "id": "cF",
    "num": "Final",
    "name": "Sacred Stones",
    "items": [
      "Vidofnir — legendary lance",
      "Nidhogg — legendary bow",
      "Excalibur — legendary wind tome",
      "Ivaldi — legendary light tome"
    ],
    "warns": [
      "Fomortiis (the Demon King) is the final boss — use the Sacred Twins weapons for best damage",
      "Deploy both Eirika and Ephraim; Myrrh and Seth are also excellent here",
      "No chapter after this — use everything"
    ]
  }
];
