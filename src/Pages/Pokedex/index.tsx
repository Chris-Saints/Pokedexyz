import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchGenericPokemon, fetchPokemon } from "../../services/pokemonApi";
import type { Pokemon } from "../../types/pokemonGlobalAPIType";
import type { EvolutionTypePokemon } from "../../types/pokemonEvolutionType";
import type { PokemonSpeciesType } from "../../types/pokemonSpeciesType";
import  Pokebola  from "../../assets/Poké_Ball_icon.png"
import {  InfoTypesAndWeight, MainIMGPokemon, MainInfo, MainPokedexContainer, ShinySection, TypeDiv } from "./pokedex.styles";
import { typeLocalMap } from "../../types/pokemonElementalTypes";
import { PrimaryType } from "../../components/PokemonCard/pokemonCard.styles";
import { Stats } from "../../components/Pokedex/Stats";
import { Evolution } from "../../components/Pokedex/Evolution";
import { SidePokemon } from "../../components/Pokedex/SidePokemon";
import { LoadImage} from "../Home/home.styles";
import { Abilities } from "../../components/Pokedex/Abilities";
import { Description } from "../../components/Pokedex/Descrition";




export function Pokedex() {
    const { id } = useParams<{ id: string }>()

    const [loading, setLoading] = useState(false)

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const [evolutionPokemon, setEvolutionPokemon] = useState<EvolutionTypePokemon | null>(null);

    const [speciesPokemon, setSpeciesPokemon] = useState<PokemonSpeciesType | null>(null);
    
    const [prevPokemon, setPrevPokemon] = useState<Pokemon | null>(null);
    const [nextPokemon, setNextPokemon] = useState<Pokemon | null>(null);
 
    useEffect(() => {
        async function loadPokemon() {
            setLoading(true);
            setPrevPokemon(null)
            setNextPokemon(null)

            if (!id) return;

            const pokemon: Pokemon = await fetchPokemon(id);

            const species: PokemonSpeciesType = await fetchGenericPokemon(pokemon.species.url)

            if(Number(id) + 1 < 1026) {
                fetchPokemon(Number(id) + 1).then(setNextPokemon);
            }

            if(Number(id) - 1 > 0) {
                fetchPokemon(Number(id) - 1).then(setPrevPokemon);
            }


            const evolution: EvolutionTypePokemon | null = await fetchGenericPokemon(species.evolution_chain.url);

            

            setPokemon(pokemon);

            if(evolution) {
                setEvolutionPokemon(evolution);
            }

            setSpeciesPokemon(species);

            setLoading(false);

        }

        loadPokemon()

    }, [id])

    if(!pokemon) {
        return <p>Carregando...</p>
    }

    if(!speciesPokemon) {
        return <p>Carregando...</p>
    }

    const type = typeLocalMap[pokemon.types[0].type.name] ?? pokemon.types[0].type.name

    const secondType = typeLocalMap[pokemon.types[1]?.type.name] ? typeLocalMap[pokemon.types[1].type.name] ?? pokemon.types[1]?.type.name : ''


    return (
        <MainPokedexContainer>
            <MainIMGPokemon>
                <img src={pokemon.sprites.other["official-artwork"].front_default}/>
            </MainIMGPokemon>

            <MainInfo>
                <div>
                    <p className="name">{pokemon.name.toUpperCase()}</p>
                </div>
                

                <p className="number">#{pokemon.id}</p>

                <InfoTypesAndWeight>
                    
                    <TypeDiv>
                        {type && <PrimaryType type={pokemon.types[0]?.type.name}>{type}</PrimaryType>}
                        {secondType && <PrimaryType type={pokemon.types[1]?.type.name}>{secondType}</PrimaryType>}
                    </TypeDiv>
  
                </InfoTypesAndWeight>
            </MainInfo>


            <Stats pokemon={pokemon} />
            


            <Description pokemon={pokemon} />


            <Abilities pokemon={pokemon} />


            <ShinySection>
                <p>Shiny</p>

                <div>
                    <img src={pokemon.sprites.other["official-artwork"].front_shiny}/>
                </div>
                
            </ShinySection>



            <Evolution evolutionChain={evolutionPokemon} />


            {/* <p>formas alternativas se tiver</p> */}


            <SidePokemon nextPokemon={nextPokemon} prevPokemon={prevPokemon} />
            

            {loading && loading ? <LoadImage src={Pokebola} alt="Pokebola" /> : <div></div>}
            
        </MainPokedexContainer>
    )
}