import { useEffect, useState } from "react"
import type { EvolutionTypePokemon } from "../../types/pokemonEvolutionType"
import type { Pokemon } from "../../types/pokemonGlobalAPIType"
import { fetchPokemon } from "../../services/pokemonApi"
import { EvolutionImg, SequenceEvolutionDiv } from "./evolution.styles"

interface EvolutionProps {
    evolutionChain: EvolutionTypePokemon | null
}

export function Evolution({evolutionChain}: EvolutionProps) {


    const [baseEvolution, setBaseEvolution] = useState<Pokemon | null>(null)

    const [firstEvolution, setFirstEvolution] = useState<Pokemon | null>(null)

    const [secondEvolution, setSecondEvolution] = useState<Pokemon | null>(null)

    const [arrayEvolution, setArrayEvolution] = useState<Pokemon[]>([])

    useEffect(() => {
        async function Evolution() {
            setBaseEvolution(null)
            setFirstEvolution(null)
            setSecondEvolution(null)
            setArrayEvolution([])

            if(!evolutionChain) return

            const base = await fetchPokemon(evolutionChain.chain.species.name);
            const first = await fetchPokemon(evolutionChain.chain.evolves_to[0].species.name);
            console.log(first);
            

            if(evolutionChain.chain.evolves_to.length > 1) {

                const evolutionArray = evolutionChain.chain.evolves_to
                const arrayNames = evolutionArray.map((pokemon) => {
                    return pokemon.species.name
                })

                const fetchNamesPokemon = await Promise.all(arrayNames.map( (name) =>  fetchPokemon(name)))

                console.log(fetchNamesPokemon);
                

                setArrayEvolution(fetchNamesPokemon)

            }
            
            if(!evolutionChain.chain.evolves_to[0].evolves_to){
                setSecondEvolution(null)
            } else {
                const second = await fetchPokemon(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name);

                setSecondEvolution(second)
            }


            setBaseEvolution(base)
            setFirstEvolution(first)
            
        }

        Evolution()
    }, [evolutionChain])


    
    if(!evolutionChain) {
        return <div>Carregando...</div>
    }

    

    return (
        <section>
            <span>Evolução</span>
            <SequenceEvolutionDiv>
                {baseEvolution && <EvolutionImg src={baseEvolution.sprites.other["official-artwork"].front_default} /> }

                {firstEvolution && <EvolutionImg src={firstEvolution.sprites.other["official-artwork"].front_default} />}

                {secondEvolution && <EvolutionImg src={secondEvolution.sprites.other["official-artwork"].front_default} />}
            </SequenceEvolutionDiv>

            <div>              
                {arrayEvolution && arrayEvolution.map((pokemon) => {return <EvolutionImg src={pokemon.sprites.other["official-artwork"].front_default} />}) }   
            </div>

        </section>
    )
}