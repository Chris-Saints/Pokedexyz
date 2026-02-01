import type { PokemonTypeEng } from "./pokemonElementalTypes"

//Tipo criado exclusivamente resumir o array de type presente nas informações dos pokemons.

export type NamedAPIResource = {
  name: string;
  url: string;
};

export type TypesPokemon = {
    slot: number,
    type: {
        name: PokemonTypeEng,
        url: string
    }
}

export type AbilitiesPokemon = {
    slot: number,
    is_hidden: false
    ability: {
        name: string,
        url: string
    }
}

export type FormPokemon = {
    name: string,
    url: string
}

export type GameIndiciesPokemon = {
    game_index: number
    version: {
        name: string,
        url: string
    }
}

export type HeldItemsPokemon = {
    item: {
        name: string,
        url: string
    },
    version_details: [
        {
            rarity: number,
            version: {
                name: string,
                url: string
            }
        }
    ]
}

export type MovesPokemon = {
    move: {
        name: string,
        url: string
    },
    version_group_details: [
        {
            level_learned_at: number,
            level_learn_method: {
                name: string,
                url: string
            },
            order?: number | null,
            version_group: {
                name: string,
                url: string
            }

        }
    ]
}

export type PastAbilitiesPokemon = {
    abilities: [
        {
            ability?: string | null,
            is_hidden: boolean,
            slot: number 
        }
    ]
    generation: {
        name: string,
        url: string
    },

}

export type StatsPokemon = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}

export type SpritesPokemon = {
    front_default: string,
    front_female?: string | null,
    front_shiny: string,
    front_shiny_female?: string | null,
    back_default: string,
    back_female?: string | null,
    back_shiny: string,
    back_shiny_female?: string | null,
    other: {
        dream_world: {
            front_default: string,
            front_female?: string | null,
        },
        home: {
            front_default: string
            front_female?: string | null
            front_shiny: string
            front_shiny_female?: string | null
        },
        "official-artwork": {
            front_default: string,
            front_shiny: string
        },
        showdown: {
            back_default: string
            back_female?: string | null
            back_shiny: string
            back_shiny_female?: string | null
            front_default: string
            front_female?: string | null
            front_shiny: string
            front_shiny_female?: string | null
        }
    },
    versions: {
        "generation-i"?: {
            "red-blue": {
                back_default: string,
                back_gray: string,
                back_transparent: string,
                front_default: string,
                front_gray: string,
                front_transparent: string
            },
            yellow: {
                back_default: string,
                back_gray: string,
                back_transparent: string,
                front_default: string,
                front_gray: string,
                front_transparent: string
            }
        },
        "generation-ii"?: {
            crystal: {
                front_default: string,
                front_shiny: string,
                back_default: string,
                back_shiny: string,
                front_transparent?: string,
                front_shiny_transparent?: string,
                back_shiny_transparent?: string,
                back_transparent?: string,
            },
            gold: {
                front_default: string,
                front_shiny: string,
                back_default: string,
                back_shiny: string,
                front_transparent?: string
            },
            silver: {
                front_default: string,
                front_shiny: string,
                back_default: string,
                back_shiny: string,
                front_transparent?: string
            },
        },
        "generation-iii"?: {
            emerald: {
                front_default: string,
                front_shiny: string,
            },
            "firered-leafgreen": {
                front_default: string,
                front_shiny: string,
                back_default: string,
                back_shiny: string,
            },
            "ruby-sapphire": {
                front_default: string,
                front_shiny: string,
                back_default: string,
                back_shiny: string,
            },
        },
        "generation-iv"?: {
            "diamond-pearl" : {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
                back_default: string,
                back_female?: string | null,
                back_shiny: string,
                back_shiny_female?: string | null,
            },
            "heatgold-soulsilver": {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
                back_default: string,
                back_female?: string | null,
                back_shiny: string,
                back_shiny_female?: string | null,
            },
            platinum: {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
                back_default: string,
                back_female?: string | null,
                back_shiny: string,
                back_shiny_female?: string | null,
            }
        },
        "generation-v"?: {
            "black-white": {
                animated: {
                    front_default: string,
                    front_female?: string | null,
                    front_shiny: string,
                    front_shiny_female?: string | null,
                    back_default: string,
                    back_female?: string | null,
                    back_shiny: string,
                    back_shiny_female?: string | null,
                },
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
                back_default: string,
                back_female?: string | null,
                back_shiny: string,
                back_shiny_female?: string | null,
            }
        },
        "generation-vi"?: {
            "omegaruby-alphasapphire": {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
            },
            "x-y": {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
            },
        },
        "generation-vii"?: {
            "ultra-sun-ultra-moon": {
                front_default: string,
                front_female?: string | null,
                front_shiny: string,
                front_shiny_female?: string | null,
            }
            icons: {
                front_default: string,
                front_female?: string | null
            }
        },
        "generation-viii"?: {
            "brilliant-diamond-shining-pearl": {
                front_default: string,
                front_female?: string | null
            }
            icons: {
                front_default: string,
                front_female?: string | null
            }
        },
        "generation-ix"?: {
            "scarlet-violet": {
                front_default: string,
                front_female?: string | null
            }
        },
    }
}

export type PastTypesPokemon = {
    generation: {
        name: string,
        url: string
    },
    types: TypesPokemon[]
}

export type Pokemon = {
    abilities: AbilitiesPokemon[],
    base_experience: number,
    cries: {
        latest: string,
        legacy: string
    },
    forms?: FormPokemon[],
    game_indicies: GameIndiciesPokemon[],
    height: number,
    held_items: HeldItemsPokemon[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: MovesPokemon[],
    name: string,
    order: number,
    past_abilities: PastAbilitiesPokemon[]
    past_types?: PastTypesPokemon[]
    species: NamedAPIResource
    sprites: SpritesPokemon
    stats: StatsPokemon[],
    types: TypesPokemon[],
    weight: number

}


//past type -  clefairy
//female - lion