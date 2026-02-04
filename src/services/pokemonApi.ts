
//Uma função que faz o processo de pegar a Url Base para pesquisar Pokemons pelo nome ou id e ja devolver os dados em json. Apenas para agilizar o processo. 
const BASE_URL = 'https://pokeapi.co/api/v2'

export async function fetchPokemon(x: number | string) {
    const res = await fetch(`${BASE_URL}/pokemon/${x}`);
    return res.json();
}



export async function fetchDetailOfPokemon(x: string) {
    const res = await fetch(`${x}`);
    return res.json();
}

export async function fetchGenericPokemon(x: string) {
    const res = await fetch(`${x}`);
    return res.json();
}

export async function fetchAbilities(x: number | string) {
    const res = await fetch(`${BASE_URL}/ability/${x}`);
    return res.json();
}







