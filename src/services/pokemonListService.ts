import type { PokemonListArray } from "../types/pokemonCardType"

const BASE_URL = 'https://pokeapi.co/api/v2'


//Função que procura faz primeiro um array com nomes e urls dos pokemons de acordo com o limite na url inicial e depois faz um array com cada pokemon com seus detalhes proprios

export async function fetchCardPokemon(limit: number, offset: number) {

    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)

    const listData: PokemonListArray = await res.json()

    const detailedPokemons = await Promise.all(
        // listData.results.map(async (item) => {
        // const data = await fetchPokemon(item.name)
        // return data
        // })
        listData.results.map(p => fetch(p.url).then(r => r.json()))
    )

    return detailedPokemons
}
