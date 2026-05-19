export const TIER_PHILOSOPHY = "<b>Tier philosophy:</b> Rated for a normal-mode run. FE8 is generally easy — almost everyone is usable. Pre-promotes judged on value at join. Light-blue border = Eirika route only. Green border = Ephraim route only. <b>Trainee note:</b> Ross, Amelia, and Ewan have a double-promotion mechanic — they reach very high caps with investment. They are ranked on base value; add 1–2 tiers if you commit EXP early. <b>Master Seal</b> (universal promotion item) removes the need to track specific crests for most units.";
export const TIERS = [
  {
    "level": "s",
    "label": "S — Core team, always deploy",
    "units": [
      {
        "name": "Seth",
        "subtitle": "Paladin · Prologue · Dominates the entire game; best in FE8",
        "cls": null
      },
      {
        "name": "Tethys",
        "subtitle": "Dancer · Ephraim Ch. 12 · Only dancer in FE8; irreplaceable double-move utility",
        "cls": "is-ephraim"
      }
    ]
  },
  {
    "level": "a",
    "label": "A — Invest freely, strong payoff",
    "units": [
      {
        "name": "Ephraim",
        "subtitle": "Lord · Ch. 8 · Excellent combat; Great Lord promotion is top-tier",
        "cls": null
      },
      {
        "name": "Franz",
        "subtitle": "Cavalier · Ch. 1 · Great growths; grows into a dominant Paladin",
        "cls": null
      },
      {
        "name": "Vanessa",
        "subtitle": "Peg. Knight · Ch. 2 · Flying utility, solid growths all game",
        "cls": null
      },
      {
        "name": "Tana",
        "subtitle": "Peg. Knight · Ch. 9 · Slightly better bases than Vanessa; great flier",
        "cls": null
      },
      {
        "name": "Myrrh",
        "subtitle": "Manakete · Ch. 16 · Extremely powerful; Dragonstone has limited uses",
        "cls": null
      },
      {
        "name": "L'Arachel",
        "subtitle": "Troubadour · Ch. 12–13 · Excellent Valkyrie; magic + mounted healing",
        "cls": null
      }
    ]
  },
  {
    "level": "b",
    "label": "B — Solid contributors",
    "units": [
      {
        "name": "Innes",
        "subtitle": "Ranger · Ch. 10–11 · Best bow unit; solid combat stats",
        "cls": null
      },
      {
        "name": "Joshua",
        "subtitle": "Myrmidon · Ch. 5 · High speed + crit; excellent Swordmaster",
        "cls": null
      },
      {
        "name": "Gerik",
        "subtitle": "Mercenary · Ch. 9–10 · Reliable Hero; needed to recruit Marisa",
        "cls": null
      },
      {
        "name": "Marisa",
        "subtitle": "Myrmidon · Eirika Ch. 9 · Great Swordmaster potential; Gerik support",
        "cls": "is-eirika"
      },
      {
        "name": "Saleh",
        "subtitle": "Sage · Ch. 16 · Pre-promote; A-rank magic on join",
        "cls": null
      },
      {
        "name": "Garcia",
        "subtitle": "Fighter · Ch. 3 · Strong physical unit if trained early; great Warrior/Hero",
        "cls": null
      },
      {
        "name": "Artur",
        "subtitle": "Monk · Ch. 5 · Reliable magic attacker; promotes to Bishop or Sage",
        "cls": null
      }
    ]
  },
  {
    "level": "c",
    "label": "C — Usable but outclassed",
    "units": [
      {
        "name": "Eirika",
        "subtitle": "Lord · Prologue · Required; solid after Great Lord promotion with Sieglinde",
        "cls": null
      },
      {
        "name": "Gilliam",
        "subtitle": "Knight · Ch. 2 · Very tanky but slow; armor class limits usefulness",
        "cls": null
      },
      {
        "name": "Kyle",
        "subtitle": "Cavalier · Ch. 8 · Decent all-rounder; joins with Ephraim",
        "cls": null
      },
      {
        "name": "Forde",
        "subtitle": "Cavalier · Ch. 8 · Kyle's counterpart; slightly different growth spread",
        "cls": null
      },
      {
        "name": "Lute",
        "subtitle": "Mage · Ch. 6 · High magic growth but very fragile early",
        "cls": null
      },
      {
        "name": "Neimi",
        "subtitle": "Archer · Ch. 4 · Solid Sniper with investment; has Colm support",
        "cls": null
      },
      {
        "name": "Cormag",
        "subtitle": "Wyvern Rider · Ephraim Ch. 10 · Decent Wyvern Knight; joins later in route",
        "cls": "is-ephraim"
      },
      {
        "name": "Duessel",
        "subtitle": "Great Knight · Ephraim Ch. 9 · High defense; armored class limits mobility",
        "cls": "is-ephraim"
      }
    ]
  },
  {
    "level": "d",
    "label": "D — Needs heavy investment or joins too late",
    "units": [
      {
        "name": "Moulder",
        "subtitle": "Priest · Ch. 3 · Staff utility; low combat ceiling",
        "cls": null
      },
      {
        "name": "Colm",
        "subtitle": "Thief · Ch. 4 · Essential for chests and doors; do not invest combat EXP",
        "cls": null
      },
      {
        "name": "Knoll",
        "subtitle": "Shaman · Ch. 15 · Late join; Summoner path is fun but combat is weak",
        "cls": null
      },
      {
        "name": "Rennac",
        "subtitle": "Rogue · Ch. 12–13 · Chest/door utility; joins late with poor combat",
        "cls": null
      },
      {
        "name": "Dozla",
        "subtitle": "Berserker · Ch. 12–13 · Joins far too late; mediocre stats for endgame",
        "cls": null
      },
      {
        "name": "Ross",
        "subtitle": "Journeyman · Ch. 3 · Trainee — double-promote pays off with early EXP investment",
        "cls": null
      },
      {
        "name": "Ewan",
        "subtitle": "Pupil · Ephraim Ch. 12 · Trainee — Summoner path is unique; needs investment",
        "cls": "is-ephraim"
      },
      {
        "name": "Amelia",
        "subtitle": "Recruit · Ch. 9–12 · Trainee — Paladin/General path; needs the most investment",
        "cls": null
      }
    ]
  },
  {
    "level": "f",
    "label": "F — Avoid",
    "units": [
      {
        "name": "Natasha",
        "subtitle": "Cleric · Ch. 5 · Strictly worse than Moulder; replace with L'Arachel or Artur",
        "cls": null
      }
    ]
  }
];
export const TIER_TIP = "<b>Trainee double-promotion:</b> Ross, Amelia, and Ewan promote at level 10 (from their trainee class), then again from their intermediate class. This gives them two full stat boosts and very high final caps — worth the EXP if started early.\n        <b>Tethys</b> is only available on Ephraim's route — this alone makes Ephraim's route the recommendation for first-time players.\n        <b>Myrrh's Dragonstone</b> has limited uses; save it for tough bosses and promoted enemies. Use a Hammerne staff to restore it.";
