import type { PokemonTypeEng } from "./pokemonTypes";

//Tipo criado exclusivamente resumir o array de type presente nas informações dos pokemons.
export type TypesPokemon = {
    slot: number,
    type: {
        name: PokemonTypeEng,
        url: string
    }
}


//Uma função que faz o processo de pegar a Url Base para pesquisar Pokemons pelo nome ou id e ja devolver os dados em json. Apenas para agilizar o processo. 
const BASE_URL = 'https://pokeapi.co/api/v2'

export async function fetchPokemon(x: number | string) {
    const res = await fetch(`${BASE_URL}/pokemon/${x}`)
    return res.json()
}











