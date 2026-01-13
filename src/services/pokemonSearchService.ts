import type { TypesPokemon } from "./pokemonApi";

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




