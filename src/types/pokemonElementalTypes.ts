export type PokemonTypeEng = 
  | 'grass'
  | 'fire'
  | 'water'
  | 'electric'
  | 'bug'
  | 'normal'
  | 'poison'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'rock'
  | 'ghost'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'flying'

//Um Mapa dos tipos de pokemon, para conseguir traduzir eles para o portugues. Porem acho possivel so deixar em ingles mesmo
export const typeLocalMap: Record<PokemonTypeEng, string> = {
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