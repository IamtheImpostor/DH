"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	exploud: {
		inherit: true,
		otherFormes: ["Exploud-Mega-Ausma"],
		formeOrder: ["Exploud", "Exploud-Mega-Ausma"],
	},
	exploudmegaausma: {
		num: 295,
		name: "Exploud-Mega-Ausma",
		baseSpecies: "Exploud",
		forme: "Mega-Ausma",
		types: ["Normal", "Dragon"],
		baseStats: {hp: 104, atk: 101, def: 73, spa: 101, spd: 113, spe: 98},
		abilities: {0: "Quaking Boom"},
		heightm: 1.5,
		weightkg: 84,
		color: "Blue",
		eggGroups: ["Monster", "Field"],
		requiredItem: "Ausma",
	},
	noivern: {
		inherit: true,
		otherFormes: ["Noivern-Mega-Ausma", "Noivern-Mega-BitBitio"],
		formeOrder: ["Noivern", "Noivern-Mega-Ausma", "Noivern-Mega-BitBitio"],
	},
	noivernmegaausma: {
		num: 715,
		name: "Noivern-Mega-Ausma",
		baseSpecies: "Noivern",
		forme: "Mega-Ausma",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 85, atk: 90, def: 90, spa: 107, spd: 110, spe: 153},
		abilities: {0: "Reverberation"},
		heightm: 1.5,
		weightkg: 85,
		color: "Purple",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "Ausma",
	},
	noivernmegabitbitio: {
		num: 715,
		name: "Noivern-Mega-BitBitio",
		baseSpecies: "Noivern",
		forme: "Mega-BitBitio",
		types: ["Psychic", "Dragon"],
		baseStats: {hp: 85, atk: 70, def: 95, spa: 120, spd: 95, spe: 170},
		abilities: {0: "Trace"},
		heightm: 1.5,
		weightkg: 85,
		color: "Purple",
		eggGroups: ["Flying", "Dragon"],
		requiredItem: "BitBitio",
	},
	toxtricity: {
		inherit: true,
		otherFormes: [
			"Toxtricity-Low-Key", "Toxtricity-Mega-BitBitio", "Toxtricity-Low-Key-Mega-BitBitio", "Toxtricity-Mega-Mossy", "Toxtricity-Low-Key-Mega-Mossy"
		],
		formeOrder: [
			"Toxtricity", "Toxtricity-Low-Key", "Toxtricity-Mega-BitBitio", "Toxtricity-Low-Key-Mega-BitBitio", "Toxtricity-Mega-Mossy", "Toxtricity-Low-Key-Mega-Mossy"
		],
	},
	toxtricitymegabitbitio: {
		num: 849,
		name: "Toxtricity-Mega-BitBitio",
		baseSpecies: "Toxtricity",
		forme: "Mega-BitBitio",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 134, def: 70, spa: 134, spd: 70, spe: 119},
		abilities: {0: "Acid Rock"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "BitBitio",
	},
	toxtricitylowkeymegabitbitio: {
		num: 849,
		name: "Toxtricity-Low-Key-Mega-BitBitio",
		baseSpecies: "Toxtricity",
		forme: "Mega-Low-Key-BitBitio",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 98, def: 110, spa: 114, spd: 110, spe: 95},
		abilities: {0: "Magnet Rock"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "BitBitio",
	},
	toxtricitymegamossy: {
		num: 849,
		name: "Toxtricity-Mega-Mossy",
		baseSpecies: "Toxtricity",
		forme: "Mega-Mossy",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 128, def: 90, spa: 134, spd: 90, spe: 85},
		abilities: {0: "Ascending Key"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Mossy Sandwich",
	},
	toxtricitylowkeymegamossy: {
		num: 849,
		name: "Toxtricity-Low-Key-Mega-Mossy",
		baseSpecies: "Toxtricity",
		forme: "Mega-Low-Key-Mossy",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 98, def: 90, spa: 134, spd: 90, spe: 115},
		abilities: {0: "Descending Key"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Mossy Sandwich",
	},
}; exports.Pokedex = Pokedex;
