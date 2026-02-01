//Type usado para a pagina do pokemon na pokedex

import type { Pokemon } from "../types/pokemonGlobalAPIType";

export async function fetchSearchedPokemon(name: string): Promise<Pokemon> {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: Pokemon = await res.json()


    return data
}




