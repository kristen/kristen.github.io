export const ITEMS = [
  {
    "type": "save",
    "title": "Lyn's Story — Tutorial Mode",
    "body": "Lyn's Story is the tutorial. <b>Stats and levels carry over</b> to the main story. If you skip it, Lyn-mode characters rejoin in Noble Lady of Caelin at reduced base stats. Green borders mark Lyn's Story chapters. All characters here automatically rejoin the main cast at <b>Noble Lady of Caelin (E.15 / H.16)</b>."
  },
  {
    "type": "ch",
    "id": "lyn_p",
    "num": "Prologue",
    "name": "A Girl from the Plains",
    "cls": "is-lyn",
    "recruits": [
      "Lyn, Sain & Kent — Automatically, turn 1"
    ],
    "items": [
      "Iron Sword (Lyn starts equipped)"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_1",
    "num": "Lyn Ch. 1",
    "name": "Footsteps of Fate",
    "cls": "is-lyn",
    "recruits": [
      "Florina — Automatically at start"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_2",
    "num": "Lyn Ch. 2",
    "name": "Sword of Spirits",
    "cls": "is-lyn",
    "recruits": [
      "Wil — Visit northern village"
    ],
    "items": [
      "Vulnerary (village)"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_3",
    "num": "Lyn Ch. 3",
    "name": "Band of Mercenaries",
    "cls": "is-lyn",
    "recruits": [
      "Dorcas — Enemy; talk with Lyn (hired to kill her, has a change of heart)",
      "Erk & Serra — NPC allied group; keep both alive through the chapter to secure their join"
    ],
    "items": [],
    "steal": [
      "Vulneraries"
    ],
    "warns": [
      "Keep Erk and Serra alive — they are NPC allies who join permanently if they survive"
    ]
  },
  {
    "type": "ch",
    "id": "lyn_4",
    "num": "Lyn Ch. 4",
    "name": "In Occupation's Shadow",
    "cls": "is-lyn",
    "recruits": [
      "Matthew — Automatically at start",
      "Lucius — Enemy monk; talk with Lyn or Matthew",
      "Guy — Enemy myrmidon; talk with Matthew (owes Matthew a debt)"
    ],
    "items": [
      "Vulnerary (village)"
    ],
    "steal": [
      "Vulneraries",
      "Door Keys"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_5",
    "num": "Lyn Ch. 5",
    "name": "Beyond the Borders",
    "cls": "is-lyn",
    "recruits": [
      "Nils — Event (freed from captivity)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_6",
    "num": "Lyn Ch. 6",
    "name": "Blood of Pride",
    "cls": "is-lyn",
    "items": [],
    "warns": []
  },
  {
    "type": "save",
    "title": "Save before Lyn Ch. 7 — gaiden unlock",
    "body": "Complete Lyn Ch. 7 in <b>≤15 turns</b> to unlock Lyn Ch. 7x (The Black Shadow). This is the only gaiden in Lyn's Story."
  },
  {
    "type": "ch",
    "id": "lyn_7",
    "num": "Lyn Ch. 7",
    "name": "Siblings Abroad",
    "cls": "is-lyn",
    "recruits": [
      "Ninian — Event (escapes with Nils)"
    ],
    "items": [],
    "warns": [
      "Complete in ≤15 turns to unlock Lyn Ch. 7x"
    ]
  },
  {
    "type": "ch",
    "id": "lyn_7x",
    "num": "Lyn Ch. 7x",
    "name": "The Black Shadow",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "items": [],
    "warns": [
      "Unlock: complete Lyn Ch. 7 in ≤15 turns"
    ]
  },
  {
    "type": "ch",
    "id": "lyn_8",
    "num": "Lyn Ch. 8",
    "name": "Vortex of Strategy",
    "cls": "is-lyn",
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_9",
    "num": "Lyn Ch. 9",
    "name": "A Grim Reunion",
    "cls": "is-lyn",
    "items": [],
    "warns": []
  },
  {
    "type": "ch",
    "id": "lyn_10",
    "num": "Lyn Ch. 10",
    "name": "The Distant Plains",
    "cls": "is-lyn",
    "items": [],
    "warns": [
      "End of Lyn's Story — all characters and levels carry into the main story"
    ]
  },
  {
    "type": "save",
    "title": "Main Story begins — choose Eliwood or Hector's Story",
    "body": "From here you choose <b>Eliwood's Story</b> (standard) or <b>Hector's Story</b> (harder, adds 6 exclusive chapters). <b>Chapter numbers shift in Hector mode</b> because of inserted chapters — shared chapters show both numbers as <b>E.XX / H.XX</b>. Orange badges = Hector-exclusive. Pink badges = Eliwood-exclusive. Orange borders = Hector-exclusive chapters."
  },
  {
    "type": "ch",
    "id": "c11",
    "num": "E.11",
    "name": "Taking Leave",
    "cls": "is-eliwood",
    "badge": "eliwood",
    "badgeText": "Eliwood",
    "recruits": [
      "Lowen — Automatically at start",
      "Rebecca — Automatically at start",
      "Marcus — Returns, automatically at start"
    ],
    "items": [
      "Knight's Crest (village)",
      "Vulnerary (village)"
    ],
    "warns": [
      "ELIWOOD MODE ONLY — Hector's Ch. 11 is 'Another Journey'"
    ]
  },
  {
    "type": "ch",
    "id": "c11h",
    "num": "H.11",
    "name": "Another Journey",
    "cls": "is-hector",
    "badge": "hector",
    "badgeText": "Hector",
    "recruits": [
      "Oswin — Automatically joins Hector at the start (Hector mode only)"
    ],
    "items": [],
    "warns": [
      "HECTOR MODE ONLY — Eliwood's Ch. 11 is 'Taking Leave'"
    ]
  },
  {
    "type": "ch",
    "id": "c12",
    "num": "Ch. 12",
    "name": "Birds of a Feather",
    "recruits": [
      "Hector — Automatically joins (Eliwood mode; he and his party merge with yours)",
      "Oswin — Joins with Hector in Eliwood mode (joins in H.11 in Hector mode)",
      "Lowen, Rebecca, Marcus — Join here in Hector mode (joined in E.11 in Eliwood mode)"
    ],
    "items": [],
    "warns": []
  },
  {
    "type": "save",
    "title": "Save before Ch. 13 — gaiden unlock + recruitment timing",
    "body": "<b>Visit the NW village in Ch. 13</b> to unlock Ch. 13x (The Peddler Merlinus). Merlinus becomes your permanent convoy manager — very useful. Also recruit Priscilla, Raven (enemy — talk with Priscilla), and Bartre here."
  },
  {
    "type": "ch",
    "id": "c13",
    "num": "Ch. 13",
    "name": "In Search of Truth",
    "recruits": [
      "Priscilla — NPC in west area; talk with Eliwood or Hector to recruit",
      "Raven — Enemy; talk with Priscilla (he's her older brother)",
      "Bartre — Enemy; talk with Eliwood, Hector, or Lyn"
    ],
    "items": [
      "Red Gem (NW village — also unlocks Ch. 13x)",
      "Iron Axe (village)"
    ],
    "steal": [
      "Vulneraries",
      "Door Keys"
    ],
    "warns": [
      "Visit NW village to get the Red Gem AND unlock Ch. 13x",
      "Priscilla must talk to Raven before he moves far — deploy both near each other"
    ]
  },
  {
    "type": "ch",
    "id": "c13x",
    "num": "Ch. 13x",
    "name": "The Peddler Merlinus",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "recruits": [
      "Merlinus — Protect him for 7 turns; he flees after and joins as convoy manager"
    ],
    "items": [],
    "warns": [
      "Unlock: visit NW village in Ch. 13",
      "Merlinus becomes your item convoy — very useful for the rest of the game"
    ]
  },
  {
    "type": "ch",
    "id": "c14",
    "num": "Ch. 14",
    "name": "False Friends",
    "recruits": [
      "Canas — Visit southern village (he's a friendly dark magic scholar)"
    ],
    "items": [
      "Nosferatu (Canas's village)",
      "Flux (other village)"
    ],
    "warns": []
  },
  {
    "type": "ch",
    "id": "c15h",
    "num": "H.15",
    "name": "Talons Alight",
    "cls": "is-hector",
    "badge": "hector",
    "badgeText": "Hector",
    "recruits": [
      "Fiora — NPC Pegasus Knight; talk with Florina (Fiora is Florina's older sister)"
    ],
    "items": [],
    "warns": [
      "HECTOR MODE ONLY — does not appear in Eliwood's Story",
      "In Eliwood mode, Fiora joins differently around E.19"
    ]
  },
  {
    "type": "ch",
    "id": "c15",
    "num": "E.15 / H.16",
    "name": "Noble Lady of Caelin",
    "recruits": [
      "Lyn, Sain, Kent, Florina, Wil, Dorcas, Serra, Erk, Lucius, Matthew, Ninian, Nils & Guy — All Lyn's Story units rejoin at levels from tutorial"
    ],
    "items": [],
    "warns": [
      "All Lyn's Story characters rejoin here",
      "If Lyn's Story was skipped, characters rejoin at reduced base stats — play the tutorial!"
    ]
  },
  {
    "type": "ch",
    "id": "c16",
    "num": "E.16 / H.17",
    "name": "Whereabouts Unknown",
    "items": [],
    "warns": [
      "Keep at least 1 NPC Caelin soldier alive to unlock Ch. 16x (The Port of Badon)"
    ]
  },
  {
    "type": "ch",
    "id": "c16x",
    "num": "E.16x / H.17x",
    "name": "The Port of Badon",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "items": [
      "Lancereaver (village)",
      "Devil Axe (village)"
    ],
    "warns": [
      "Unlock: keep ≥1 Caelin soldier alive in E.16/H.17",
      "DO NOT defeat Dart here — he appears as an enemy pirate; killing him locks you out of recruiting him in E.17/H.18",
      "Arena available — great for grinding levels, weapon ranks, supports, and gold"
    ]
  },
  {
    "type": "ch",
    "id": "c17",
    "num": "E.17 / H.18",
    "name": "Pirate Ship",
    "recruits": [
      "Dart — Enemy pirate; talk with Rebecca (they grew up together)"
    ],
    "items": [
      "Chest contents (various weapons and gold)"
    ],
    "steal": [
      "Vulneraries",
      "Keys"
    ],
    "warns": [
      "Dart is an enemy sailing with the pirates — have Rebecca nearby and ready to talk",
      "Moving ship map — terrain changes each turn, be careful with positioning"
    ]
  },
  {
    "type": "save",
    "title": "Save before E.18/H.19 — gaiden unlock",
    "body": "Complete E.18/H.19 (The Dread Isle) in <b>≤15 turns</b> to unlock E.18x/H.19x (Imprisoner of Magic). Hawkeye also joins here as an NPC — <b>keep him alive</b>, he is needed for the E.22x/H.23x unlock conditions."
  },
  {
    "type": "ch",
    "id": "c18",
    "num": "E.18 / H.19",
    "name": "The Dread Isle",
    "recruits": [
      "Hawkeye — NPC ally; joins your party automatically after the chapter"
    ],
    "items": [
      "Elfire (village)"
    ],
    "warns": [
      "Complete in ≤15 turns to unlock E.18x/H.19x",
      "Keep Hawkeye alive through this chapter — required for E.22x/H.23x unlock"
    ]
  },
  {
    "type": "ch",
    "id": "c18x",
    "num": "E.18x / H.19x",
    "name": "Imprisoner of Magic",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "items": [
      "Luna (chest)",
      "Various chest items"
    ],
    "steal": [
      "Vulneraries"
    ],
    "warns": [
      "Unlock: complete E.18/H.19 in ≤15 turns",
      "Defeat Kishuna (magic seal enemy) — required for Hector mode H.20x unlock"
    ]
  },
  {
    "type": "ch",
    "id": "c19",
    "num": "E.19 / H.20",
    "name": "Dragon's Gate",
    "recruits": [
      "Heath — Enemy wyvern rider; talk with Lyn or Priscilla (he questions his loyalty to the Black Fang)",
      "Fiora — NPC (Eliwood mode only); talk with Florina to recruit (Hector mode players already have her from H.15)",
      "Legault — Enemy thief (former Black Fang); appears from stairs early in the chapter; talk with Eliwood, Hector, or Lyn — will likely have already opened the eastern chests"
    ],
    "items": [
      "Barrier (chest, likely opened by Legault)",
      "Guiding Ring (chest, likely opened by Legault)"
    ],
    "steal": [
      "Member Card (enemy Thief SE — only one in the entire game; grants access to secret shops)"
    ],
    "warns": [
      "Heath approaches from the east — have Lyn or Priscilla positioned to intercept and talk",
      "Eliwood mode: also recruit Fiora here by talking with Florina",
      "STEAL the Member Card from the enemy Thief in the SE before he escapes — it is irreplaceable",
      "Recruit Legault before he moves too far — intercept him near the stairs"
    ]
  },
  {
    "type": "ch",
    "id": "c19xx",
    "num": "H.20x",
    "name": "A Glimpse in Time",
    "cls": "is-hector",
    "badge": "hector",
    "badgeText": "Hector",
    "items": [
      "Ninis's Grace (wind bracelet, protects Ninian/Nils)"
    ],
    "warns": [
      "HECTOR MODE ONLY",
      "Unlock: Nils reached Level 7+ during Lyn's Story AND Kishuna was defeated in E.18x/H.19x"
    ]
  },
  {
    "type": "ch",
    "id": "c20",
    "num": "E.20 / H.21",
    "name": "New Resolve",
    "items": [],
    "warns": [
      "Primarily a story/transition chapter after Dragon's Gate — Eliwood and company return to Badon"
    ]
  },
  {
    "type": "ch",
    "id": "c21",
    "num": "E.21 / H.22",
    "name": "Kinship's Bond",
    "items": [],
    "warns": [
      "Secret shop in the top-left room (left of the pillar) — requires Member Card from E.19/H.20 to access"
    ]
  },
  {
    "type": "save",
    "title": "Save before E.22/H.23 — gaiden unlock conditions",
    "body": "To unlock E.22x/H.23x (Genesis): <b>Hawkeye must be alive</b> AND you must earn <b>700+ total EXP</b> in E.22/H.23 (Living Legend). Send all units into the fog to fight — the more enemies killed, the better. Also: Pent and Louise join as NPCs — protect them to secure their permanent recruitment."
  },
  {
    "type": "ch",
    "id": "c22",
    "num": "E.22 / H.23",
    "name": "Living Legend",
    "recruits": [
      "Pent — NPC allied Sage; joins permanently after the chapter (best pre-promote in the game)",
      "Louise — Joins with Pent (Sniper, Pent's wife)"
    ],
    "items": [
      "Elixir (Athos gifts at chapter start)"
    ],
    "warns": [
      "Earn 700+ total EXP this chapter to unlock E.22x/H.23x — farm as many enemies as possible",
      "Keep Hawkeye alive (also required for E.22x/H.23x)",
      "Keep Pent and Louise alive — they join after the chapter",
      "Fog of War sandstorm — bring Torch staves or units with high vision radius"
    ]
  },
  {
    "type": "ch",
    "id": "c22x",
    "num": "E.22x / H.23x",
    "name": "Genesis",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "items": [
      "Various stat boosters and rare items"
    ],
    "warns": [
      "Unlock: Hawkeye alive + 700+ EXP earned in E.22/H.23"
    ]
  },
  {
    "type": "save",
    "title": "Save before E.23/H.24 — Four-Fanged Offense split",
    "body": "Ch. 23 has two versions based on your <b>lords' combined level</b>. <b>Lloyd version</b> (Fog of War, harder) if lords' combined level is ≤49. <b>Linus version</b> (no Fog of War, easier) if ≥50. Your choice determines whether <b>Wallace</b> (Lloyd route) or <b>Geitz</b> (Linus route) is recruitable. Duplicate save to see both."
  },
  {
    "type": "split",
    "title": "Four-Fanged Offense — Lloyd vs Linus",
    "opts": [
      {
        "badge": "ra",
        "label": "Lloyd (White Wolf)",
        "cond": "Lords' combined level ≤49",
        "units": "Wallace (General) — NPC ally, joins after chapter",
        "note": "Fog of War map. Wallace is a very poor unit at this point; armored movement hurts him badly."
      },
      {
        "badge": "rb",
        "label": "Linus (Mad Dog)",
        "cond": "Lords' combined level ≥50",
        "units": "Geitz (Warrior) — enemy; talk with Dart to recruit",
        "note": "No fog of war, easier chapter. Geitz is a solid pre-promote Warrior if you want an axe user."
      }
    ],
    "excl": [
      "Wallace OR Geitz"
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c23a",
        "num": "E.23A / H.24A",
        "name": "Four-Fanged Offense (Lloyd)",
        "cls": "is-ra",
        "badge": "ra",
        "badgeText": "Lloyd",
        "recruits": [
          "Wallace — NPC ally General; joins automatically after the chapter"
        ],
        "items": [],
        "warns": [
          "Fog of War! Bring Torch staves",
          "Wallace is generally not worth training at this stage — armored class, very late join"
        ]
      },
      {
        "id": "c23b",
        "num": "E.23B / H.24B",
        "name": "Four-Fanged Offense (Linus)",
        "cls": "is-rb",
        "badge": "rb",
        "badgeText": "Linus",
        "recruits": [
          "Geitz — Enemy Warrior; talk with Dart to recruit"
        ],
        "items": [],
        "warns": [
          "Have Dart alive and positioned near Geitz when he appears"
        ]
      }
    ]
  },
  {
    "type": "ch",
    "id": "c25h",
    "num": "H.25",
    "name": "Crazed Beast",
    "cls": "is-hector",
    "badge": "hector",
    "badgeText": "Hector",
    "recruits": [
      "Farina — Pay 20,000G to recruit (Hector mode only)"
    ],
    "items": [],
    "warns": [
      "HECTOR MODE ONLY — does not appear in Eliwood's Story",
      "Farina costs 20,000G — only worthwhile if you need a third flier; Florina and Fiora are strictly better"
    ]
  },
  {
    "type": "ch",
    "id": "c24",
    "num": "E.24 / H.26",
    "name": "Unfulfilled Heart",
    "recruits": [
      "Nino — NPC ally Mage; joins at start of chapter",
      "Jaffar — Enemy Assassin (Angel of Death); Nino must talk to him to recruit"
    ],
    "items": [],
    "warns": [
      "CRITICAL: Have Nino talk to Jaffar — he will not join otherwise",
      "Both Nino AND Jaffar must survive E.24/H.26 AND E.26/H.28 to unlock E.26x/H.28x (Night of Farewells)",
      "Jaffar is one of the best units in the game despite late join"
    ]
  },
  {
    "type": "save",
    "title": "Save before E.25/H.27 — Pale Flower split + Harken vs. Karel",
    "body": "Ch. 25 has two versions. <b>Kenneth version</b> if your magic users (Serra, Erk, Priscilla, Lucius) gained more EXP than your physical users (Dorcas, Bartre, Guy, Raven). <b>Jerme version</b> otherwise. Additionally, either <b>Harken</b> or <b>Karel</b> is recruitable this chapter — they are mutually exclusive. See Ch. 25 notes for specific conditions per version."
  },
  {
    "type": "split",
    "title": "Pale Flower of Darkness — Kenneth vs Jerme",
    "opts": [
      {
        "badge": "ra",
        "label": "Kenneth",
        "cond": "Magic users' gained EXP > physical users' gained EXP",
        "units": "Harken OR Karel available (see chapter notes for exact condition)",
        "note": "Magic-heavy enemy composition. Harken appears if <2 promoted enemies defeated by turn 9; Karel appears if ≥2 defeated."
      },
      {
        "badge": "rb",
        "label": "Jerme",
        "cond": "Physical users' gained EXP ≥ magic users' gained EXP",
        "units": "Harken OR Karel available (see chapter notes for exact condition)",
        "note": "Physical-heavy enemy composition. Harken appears if <4 doors opened by turn 9; Karel appears if ≥4 doors opened."
      }
    ],
    "excl": [
      "Kenneth OR Jerme version",
      "Harken OR Karel (not both)"
    ]
  },
  {
    "type": "pair",
    "pair": [
      {
        "id": "c25a",
        "num": "E.25A / H.27A",
        "name": "Pale Flower (Kenneth)",
        "cls": "is-ra",
        "badge": "ra",
        "badgeText": "Kenneth",
        "recruits": [
          "Harken — Enemy Hero; appears if <2 promoted enemies defeated by turn 9 → talk with Eliwood or Hector",
          "Karel — Enemy Swordmaster; appears if ≥2 promoted enemies defeated by turn 9 → talk with any unit (mutually exclusive with Harken)"
        ],
        "items": [],
        "warns": [
          "Harken vs. Karel: defeat <2 promoted enemies by turn 9 for Harken; ≥2 for Karel",
          "Recruit ONE — the other will not appear this chapter"
        ]
      },
      {
        "id": "c25b",
        "num": "E.25B / H.27B",
        "name": "Pale Flower (Jerme)",
        "cls": "is-rb",
        "badge": "rb",
        "badgeText": "Jerme",
        "recruits": [
          "Harken — Enemy Hero; appears if <4 doors opened by turn 9 → talk with Eliwood or Hector",
          "Karel — Enemy Swordmaster; appears if ≥4 doors opened by turn 9 → talk with any unit (mutually exclusive with Harken)"
        ],
        "items": [],
        "warns": [
          "Harken vs. Karel: open <4 doors by turn 9 for Harken; ≥4 for Karel",
          "Recruit ONE — the other will not appear this chapter"
        ]
      }
    ]
  },
  {
    "type": "save",
    "title": "Save before E.26/H.28 — E.26x/H.28x unlock",
    "body": "Unlock E.26x/H.28x (Night of Farewells) by: <b>Nino recruited in E.24/H.26</b>, <b>Jaffar recruited in E.24/H.26 via Nino</b>, and <b>both survive through E.26/H.28</b>. If either dies at any point after E.24/H.26, the gaiden is locked. Save here as insurance."
  },
  {
    "type": "ch",
    "id": "c26",
    "num": "E.26 / H.28",
    "name": "Battle Before Dawn",
    "items": [],
    "steal": [
      "Vulneraries"
    ],
    "warns": [
      "Keep Nino AND Jaffar alive — required for E.26x/H.28x",
      "Reinforcements are plentiful and dangerous; do not overextend"
    ]
  },
  {
    "type": "ch",
    "id": "c26x",
    "num": "E.26x / H.28x",
    "name": "Night of Farewells",
    "cls": "is-gaiden",
    "badge": "gaiden",
    "badgeText": "Gaiden",
    "items": [
      "Speedwings (village)",
      "Various stat boosters"
    ],
    "warns": [
      "Unlock: Nino talked to Jaffar in E.24/H.26, both survived through E.26/H.28"
    ]
  },
  {
    "type": "ch",
    "id": "c27",
    "num": "E.27 / H.29",
    "name": "Cog of Destiny",
    "items": [
      "Warp (chest — the ONLY obtainable Warp staff in the entire game; do not miss it)",
      "Iron Rune (held by boss — only one in the game; protects against crits)"
    ],
    "warns": [
      "Boss is whichever of Lloyd/Linus was NOT fought in E.23/H.24 — same character, other brother",
      "GET THE WARP STAFF from the chest — it is irreplaceable",
      "Steal or defeat the boss for the Iron Rune",
      "Dangerous chapter: fast Valkyries, Druids with Luna, and multiple status staves",
      "Eliwood promotes automatically at the end of this chapter (story event)",
      "Vaida appears as a reinforcement with Wyvern Riders when you approach the altar"
    ]
  },
  {
    "type": "ch",
    "id": "c28",
    "num": "E.28 / H.30",
    "name": "Valorous Roland",
    "recruits": [
      "Isadora — NPC Paladin; joins after a story event"
    ],
    "items": [
      "Durandal — Eliwood's legendary Blazing Sword (story event: Roland's ghost bestows it)"
    ],
    "warns": [
      "Ninian's story role concludes around this chapter — she will no longer be available as a dancer",
      "Eliwood wields Durandal from here on; it counts as his promotion weapon",
      "Isadora joins very late with mediocre stats for endgame"
    ]
  },
  {
    "type": "ch",
    "id": "c29",
    "num": "E.29 / H.31",
    "name": "Sands of Time",
    "items": [],
    "warns": [
      "Primarily a long story chapter — Athos recounts his 500-year history with Nergal in Arcadia"
    ]
  },
  {
    "type": "ch",
    "id": "c31x",
    "num": "H.31x",
    "name": "Battle Preparations",
    "cls": "is-hector",
    "badge": "hector",
    "badgeText": "Hector",
    "recruits": [
      "Karla — Enemy Swordmaster; Bartre must be a promoted Warrior at Level 5+ before the chapter starts — she challenges him to a duel, then joins if he survives"
    ],
    "items": [],
    "warns": [
      "HECTOR MODE ONLY",
      "Unlock: complete E.29/H.31 (Sands of Time) in ≤20 turns",
      "Karla: Bartre must be a Level 5+ Warrior (promoted) before this chapter — plan ahead"
    ]
  },
  {
    "type": "ch",
    "id": "c30",
    "num": "E.30 / H.32",
    "name": "Victory or Death",
    "recruits": [
      "Renault — Visit ruins to the north within 11 turns (last recruitable character; Bishop pre-promote with A-rank staves)"
    ],
    "items": [
      "Fortify (Renault carries it — only Fortify staff in Eliwood's tale)"
    ],
    "warns": [
      "Visit the northern ruins within 11 turns to recruit Renault and get the Fortify staff",
      "Renault joins far too late to develop, but Fortify is a useful staff for the endgame"
    ]
  },
  {
    "type": "ch",
    "id": "cF",
    "num": "Final",
    "name": "Light",
    "recruits": [
      "Athos — Guest unit (does not count as permanent; uses Forblaze and Aureola)"
    ],
    "items": [
      "Durandal — Eliwood's legendary sword (obtained through story quest)",
      "Armads — Hector's legendary axe (obtained through story quest)",
      "Sol Katti — Lyn's legendary sword (evolved from Mani Katti)"
    ],
    "warns": [
      "All three lords receive their legendary weapons and promote before this chapter",
      "Athos handles the toughest enemies with his legendary tomes — let him"
    ]
  }
];
