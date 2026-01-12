import { useEffect, useState } from "react";
import { fetchPokemonCard, type PokemonCardBase } from "../../services/pokemonApi";
import { Pokemoncard } from "../../components/PokemonCard";

export function Home() {

    const [pokemons, setPokemons] = useState<PokemonCardBase | null >(null);

    useEffect(() => {
        async function fetchPokemonBase() {
            const response = await fetchPokemonCard(54);
            setPokemons(response)
        }

        fetchPokemonBase()
    },[])




    return(
        <>
        {pokemons && <Pokemoncard pokemon={pokemons} />}
            {/* {pokemons!.map(pokemon => <Pokemoncard pokemon={pokemon} />)} */}

        </>
    )
}