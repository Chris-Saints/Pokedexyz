import { useEffect, useState } from "react";
import { Pokemoncard } from "../../components/PokemonCard";
import { fetchCardPokemon, type PokemonCardBase } from "../../services/pokemonListService";

export function Home() {

    const [pokemons, setPokemons] = useState<PokemonCardBase[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchPokemons(){
            try {
                setLoading(true)
                
                const fetchDetailedPokemons: PokemonCardBase[] = await fetchCardPokemon() 

                setPokemons(fetchDetailedPokemons)
                
            } finally {
                setLoading(false)
            }
        }
        fetchPokemons()
        
        
    }, [])

        




    return(
        <>

        {loading && loading ? <p>Carregando</p> : <p></p>}

        {pokemons && pokemons.map((pokemon) => { //Ele verifica se existe algo dentro de pokemons e se tiver ele passa por todos os itens e renderiza todos
            // Aqui ele não estava renderizando, mas funcionou quando coloquei o return
            return <Pokemoncard 
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
        })} 

        </>
    )
}