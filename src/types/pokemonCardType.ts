import type { TypesPokemon } from "./pokemonGlobalAPIType"

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