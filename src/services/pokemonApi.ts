type TypesPokemon = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

//Type usado para a pagina do pokemon na pokedex
export type PokemonBase = {
    id: number;
    name: string;
    is_default: boolean; //Para informar se é a forma padrão do pokemon. Diferencia Mega, Tera, ou outras formas
    order: number; //PAra ordenar os pokemons colocando as formas na ordem tbm
    height: number;
    weight: number;
    abilities: unknown[]; //São as habilidades passivas dos pokemons
    types: TypesPokemon[];
    moves: unknown[];
    species: {name: string, url: string};
    sprites: {
        front_default: string
        front_female?: string | null
        front_shiny: string
        front_shiny_female?: string | null
        other: { 
            "official-artwork":{
                front_default: string, front_shiny: string
            }
        }
    };
    stats: unknown[];

}


export async function fetchSearchedPokemon(name: string): Promise<PokemonBase> {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: PokemonBase = await res.json()


    return data
}


export type PokemonTypeEng = 
| "fire"
| "water"
| "grass"
| "electric"
| "bug"
| "poison"
| "normal"
| "flying"
| "ground"
| "fairy"
| "psychic"
| "fighting"
| "rock"
| "ghost"
| "ice"
| "dark"
| "dragon"
| "steel"

export const typeLocalMap: Record<string, string> = {
    fire: "Fogo",
    water: "Água",
    grass: "Grama",
    electric: "Elétrico",
    bug: "Inseto",
    poison: "Veneno",
    normal: "Normal",
    flying: "Voador",
    ground: "Terrestre",
    fairy: "Fada",
    psychic: "Psíquico",
    fighting: "Lutador",
    rock: "Pedra",
    ghost: "Fantasma",
    ice: "Gelo",
    dark: "Sombrio",
    dragon: "Dragão",
    steel: "Aço"
}

//Type usado para montar o card geral dos pokemons
export type PokemonCardBase = { 
    id: number;
    name: string;
    is_default: boolean;
    types: TypesPokemon[]
    sprites: {
        front_default: string
        front_female?: string | null
        front_shiny: string
        front_shiny_female?: string | null
        other: { 
            "official-artwork":{
                front_default: string, front_shiny: string
            }
        }
    };
}

export async function fetchPokemonCard(id: number): Promise<PokemonCardBase> {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data: PokemonCardBase = await res.json()


    return data
}

