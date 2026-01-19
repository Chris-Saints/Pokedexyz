import { type TypesPokemon } from "./pokemonApi";


const BASE_URL = 'https://pokeapi.co/api/v2'

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


//Type feito para que primeiramente tenhamos uma lista dos nomes dos pokemons com suas proprias urls para podemormos fazer um map para cada item
export type PokemonListItem = { 
    name: string
    url: string
}

//Aqui transforma o tipo PokemonListItem em uma array para poder efetivar o map
export type PokemonListArray = {
    results: PokemonListItem[]
}

//Função que procura faz primeiro um array com nomes e urls dos pokemons de acordo com o limite na url inicial e depois faz um array com cada pokemon com seus detalhes proprios


export async function fetchCardPokemon(limit: number, offset: number) {

    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)

    const listData:PokemonListArray = await res.json()

    const detailedPokemons = await Promise.all(
        // listData.results.map(async (item) => {
        // const data = await fetchPokemon(item.name)
        // return data
        // })
        listData.results.map(p => fetch(p.url).then(r => r.json()))
    )

    return detailedPokemons
}
