export const Pokedex: {[speciesid: string]: SpeciesData} = }
	azumarill: {
		num: 184,
		name: "A Golden Waddle Dee",
		types: ["Water", "Fairy"],
		baseStats: {hp: 100, atk: 50, def: 100, spa: 60, spd: 100, spe: 80},
		abilities: {0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper"},
		heightm: 0.8,
		weightkg: 28.5,
   },
	shelgon: {
		num: 372,
		name: "xzern",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 65, atk: 95, def: 100, spa: 125, spd: 50, spe: 115},
		abilities: {0: "Rock Head", 1: "Overcoat", H: "Blaze"},
		heightm: 1.1,
		weightkg: 110.5,
	},
	mawile: {
		num: 303,
		name: "Mace",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50},
		abilities: {0: "Hyper Cutter", 1: "Intimidate", H: "Sheer Force"},
		heightm: 0.6,
		weightkg: 11.5,
		otherFormes: ["Mace-Mega"],
		formeOrder: ["Mace", "Mace-Mega"],
	},
	mawilemega: {
		num: 303,
		name: "Mace-Mega",
		baseSpecies: "Mawile",
		forme: "Mega",
		types: ["Steel", "Fairy"],
		baseStats: {hp: 50, atk: 105, def: 125, spa: 55, spd: 95, spe: 50},
		abilities: {0: "Huge Power"},
		heightm: 1,
		weightkg: 23.5,
		requiredItem: "Mawilite",
	},
	azumarill: {
		num: 184,
		name: "adamantazu",
		types: ["Water", "Fairy"],
		baseStats: {hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50},
		abilities: {0: "Thick Fat", 1: "Huge Power", H: "Sap Sipper"},
		heightm: 0.8,
		weightkg: 28.5,	
	},
	gastrodon: {
		num: 423,
		name: "Finland",
		baseForme: "West",
		types: ["Water", "Ground"],
		baseStats: {hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39},
		abilities: {0: "Sticky Hold", 1: "Storm Drain", H: "Sluggy Slug"},
		heightm: 0.9,
		weightkg: 29.9,
	},
	corviknight: {
		num: 823-5,
		name: "VTaxi",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67},
		abilities: {0: "Pressure", 1: "Unnerve", H: "Reinforced Steel"},
		heightm: 2.2,
		weightkg: 75,
	},
	solosis: {
		num: 577,
		name: "Snessy!",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 100, atk: 30, def: 100, spa: 150, spd: 100, spe: 70},
		abilities: {0: "Overcoat", 1: "Magic Guard", H: "Random Number Generation"},
		heightm: 0.3,
		weightkg: 1,
	},
	wingull: {
		num: 278,
		name: "Albatr0ss",
		types: ["Water", "Flying"],
		baseStats: {hp: 75, atk: 50, def: 100, spa: 125, spd: 85, spe: 75},
		abilities: {0: "Keen Eye", 1: "Strong Jaw", H: "Casanova"},
		heightm: 0.6,
		weightkg: 9.5,
	},
	sandslash: {
		num: 28,
		name: "Colteor",
		types: ["Ground"],
		baseStats: {hp: 100, atk: 110, def: 125, spa: 45, spd: 60, spe: 90},
		abilities: {0: "Sand Veil", 1: "Sand Rush", H: "Sand Shield"},
		heightm: 1,
		weightkg: 29.5,
	},
	skarmory: {
		num: 227,
		name: "Ironmage",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70},
		abilities: {0: "Keen Eye", 1: "Sturdy", H: "Vengeful Spikes"},
		heightm: 1.7,
		weightkg: 50.5,
	},
	chansey: {
		num: 113,
		name: "zorbees",
		types: ["Fairy"],
		gender: "F",
		baseStats: {hp: 250, atk: 5, def: 5, spa: 5, spd: 5, spe: 5},
		abilities: {0: "Natural Cure", 1: "Serene Grace", H: "Gambit"},
		heightm: 1.1,
		weightkg: 34.6,
	},
	wobbuffet: {
		num: 202,
		name: "Theorymon",
		types: ["Psychic", "Fire"],
		baseStats: {hp: 100, atk: 35, def: 100, spa: 35, spd: 100, spe: 35},
		abilities: {0: "Shadow Tag", 1: "Telepathy", H: "Super Shadow Bros"},
		heightm: 1.3,
		weightkg: 28.5,
		otherformes: ["Wobbuffet-Ultra"]
	},
	wobbuffetultra: {
	num: 202,
	name: "Theorymon-Ultra",
	baseSpecies: "Wobbuffet",
	forme: "Ultra",
   types: ["Flying", "Fire"],
	baseStats: {hp: 100, atk: 135, def: 35, spa: 100, spd: 35, spe: 100},
	abilities: {0: "Joyous Jump"},
	heightm: 2.6,
	weightkg: 38.7,
	changesFrom: "Wobbuffet"	
	},
	slowkinggalar: {
		num: 199,
		name: "SlowAndBruh",
		baseSpecies: "Slowking",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 95, atk: 75, def: 100, spa: 110, spd: 110, spe: 60},
		abilities: {0: "Curious Medicine", 1: "Regenerator", H: "Release the Bulbasaur"},
		heightm: 1.8,
		weightkg: 79.5,
	},
	bellsprout: {
		num: 69,
		name: "Wow",
		types: ["Grass", "Poison"],
		baseStats: {hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70},
		abilities: {0: "Chlorophyll", H: "Rattled"},
		heightm: 0.7,
		weightkg: 4,	
	},
	mankey: {
		num: 56,
		name: "Angry",
		types: ["Fighting"],
		baseStats: {hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Defiant"},
		heightm: 0.5,
		weightkg: 28,
	},
	koffing: {
		num: 109,
		name: "Haha",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60},
		abilities: {0: "Levitate", 1: "Neutralizing Gas", H: "Stench"},
		heightm: 0.6,
		weightkg: 1,
	},
	azurill: {
		num: 298,
		name: "Sad",
		types: ["Normal", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 100, atk: 50, def: 100, spa: 60, spd: 100, spe: 80},
		abilities: {0: "Wimp Out", 1: "Huge Power", H: "Sap Sipper"},
		heightm: 0.2,
		weightkg: 2,
	},
	alomomola: {
		num: 594,
		name: "Love",
		types: ["Water"],
		baseStats: {hp: 225, atk: 75, def: 80, spa: 40, spd: 45, spe: 65},
		abilities: {0: "Healer", 1: "Hydration", H: "Regenerator"},
		heightm: 1.2,
		weightkg: 31.6,
	},
	bisharp: {
		num: 625,
		name: "Total Clefairy",
		types: ["Water", "Steel"],
		baseStats: {hp: 65, atk: 130, def: 100, spa: 60, spd: 70, spe: 105},
		abilities: {0: "Defiant", 1: "Inner Focus", H: "Top Shagger"},
		heightm: 1.6,
		weightkg: 70,
		otherFormes: ["Total Clefairy-Superlike
	   formeOrder: ["Total Clefairy", "Total Clefairy-Superlike"],
   },
	bisharpsuperlike: {
		num: 625,
		name: "Total Clefairy-Superlike",
		baseSpecies: "Bisharp",
		forme: "Superlike",
		types: ["Water", "Fairy"],
		baseStats: {hp: 60, atk: 160, def: 110, spa: 80, spd: 90, spe: 125},
		abilities: {0: "Damaged"},
		heightm: 1.6,
		weightkg: 70,
		requiredItem: "Likedisc",
	},
	mew: {
		num: 151,
		name: "CaffeineBoost",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Synchronize", H: "Demoralization},
		heightm: 0.4,
		weight: 4,
	},
	quagsire: {
		num: 195,
		name: "zxgzxg",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 95, atk: 65, def: 85, spa: 30, spd: 85, spe: 65},
		abilities: {0: "Damp", 1: "Water Absorb", H: "The Big Dumb"},
		heightm: 1.4,
		weightkg: 75,
	},
	gengar: {
		num: 94,
		name: "ASMRxism",
		types: ["Ghost", "Poison"],
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110},
		abilities: {0: "Cursed Body", H: "Incorrigible"},
		heightm: 1.5,
		weightkg: 40.5,
	},
	spiritomb: {
		num: 442,
		name: "az",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 70, atk: 60, def: 100, spa: 120, spd: 100, spe: 80},
		abilities: {0: "Pressure", 1: "Infiltrator", H: "Flare Boost"},
		heightm: 1,
		weightkg: 108,
	},
	munchlax: {
		num: 446,
		name: "faint",
		types: ["Normal", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 160, atk: 110, def: 100, spa: 65, spd: 110, spe: 5},
		abilities: {0: "Pickup", 1: "Thick Fat", H: "Snack Snatch"},
		heightm: 0.6,
		weightkg: 105,
	},
	slowpokegalar: {
		num: 79,
		name: "Ullar",
		baseSpecies: "Slowpoke",
		forme: "Galar",
		types: ["Psychic"],
		baseStats: {hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30},
		abilities: {0: "Own Tempo", 1: "Regenerator", H: "Is This D20 Related?"},
		heightm: 1.2,
		weightkg: 36,
	},
	seviper: {
		num: 336,
		name: "Regic Boat",
		types: ["Poison", "Steel"],
		baseStats: {hp: 103, atk: 70, def: 120, spa: 120, spd: 70, spe: 75},
		abilities: {0: "Shed Skin", 1: "Infiltrator", H: "Nitro Saltment"},
		heightm: 2.7,
		weightkg: 52.5,	
