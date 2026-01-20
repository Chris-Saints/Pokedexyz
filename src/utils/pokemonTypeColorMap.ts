import type { PokemonTypeEng } from "../services/pokemonTypes";

//Type Color Map

export const pokemonTypeColorMap: Record<PokemonTypeEng, string> = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A890F0',
}

//Gen Color Map

export const pokemonGenColorMap: Record<number, string> = {
    1: '#ff0000',
    2: '#f58506',
    3: '#f7cd26',
    4: '#2bad2b',
    5: '#0bb9b9',
    6: '#1890e0',
    7: '#5839c9',
    8: '#A040A0',
    9: '#ce2e98',
    0: '#2c2f33',

}