import { useEffect, useState } from "react"
import { EvolutionCard, EvolutionImg, EvolutionSection, SequenceEvolutionDiv } from "./evolution.styles"
import { Link } from "react-router-dom"
import type { EvolutionTypePokemon } from "../../../types/pokemonEvolutionType";
import { fetchPokemon } from "../../../services/pokemonApi";
import type { Pokemon } from "../../../types/pokemonGlobalAPIType";

interface EvolutionProps {
    evolutionChain: EvolutionTypePokemon | null
}

export function Evolution({evolutionChain}: EvolutionProps) {

    const [arrayEvolution, setArrayEvolution] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function Evolution() {

            setArrayEvolution([])

            if(!evolutionChain) return
            
            const baseName = evolutionChain.chain.species.name
            const base = await fetchPokemon(baseName);

            const firstEvolutions = evolutionChain.chain.evolves_to;



            //Se não tiver nenhuma evolução
            if(firstEvolutions.length === 0){
                setArrayEvolution([base])
                return
            }
             
            //Tem varias evoluções como o eevee
            if(firstEvolutions.length > 1) {
                const names = firstEvolutions.map(e => e.species.name)
                const evolutions = await Promise.all(
                    names.map(name => fetchPokemon(name))
                )
                setArrayEvolution([base, ...evolutions])
                return
            }

            const first = await fetchPokemon(firstEvolutions[0].species.name)

            const secondEvolutions = firstEvolutions[0]?.evolves_to

            //Tem uma segunda evolução
            if(secondEvolutions && secondEvolutions.length > 0) {
                const second = await fetchPokemon(secondEvolutions[0].species.name);

                setArrayEvolution([base, first, second])
                return
            }
            
            setArrayEvolution([base, first]);

            
            
        }

        Evolution()
    }, [evolutionChain])


    
    if(!evolutionChain) {
        return <div>Carregando...</div>
    }

    

    return (
        <EvolutionSection>
            <span>Evolução</span>
            <SequenceEvolutionDiv>
                {arrayEvolution && arrayEvolution.map((pokemon) => {
                    return( 
                        <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                            <EvolutionCard>

                                <EvolutionImg src={pokemon.sprites.other["official-artwork"].front_default} />
                                {pokemon.name.toUpperCase()}

                            </EvolutionCard> 
                        </Link>
                    )
                    }) 
                }
            </SequenceEvolutionDiv>

        </EvolutionSection>
    )
}