import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchGenericPokemon, fetchPokemon } from "../../services/pokemonApi";
import { StarIcon } from "@phosphor-icons/react";
import type { Pokemon } from "../../types/pokemonGlobalAPIType";
import type { EvolutionTypePokemon } from "../../types/pokemonEvolutionType";
import type { PokemonSpeciesType } from "../../types/pokemonSpeciesType";
import { Evolution } from "../../components/Evolution";
import  Pokebola  from "../../assets/Poké_Ball_icon.png"
import { FavButtonDiv, InfoStats, MainIMGPokemon, MainInfo, MainPokedexContainer, NextPokemonButton, OthersPokemonSection, PrevPokemonButton, SectionStats, ShinySection } from "./pokedex.styles";


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

            if (!id) return;

            const pokemon: Pokemon = await fetchPokemon(id);

            const species: PokemonSpeciesType = await fetchGenericPokemon(pokemon.species.url)

            fetchPokemon(Number(id) + 1).then(setNextPokemon);
            fetchPokemon(Number(id) - 1).then(setPrevPokemon);


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

    if(!nextPokemon) {
        return <p>Carregando...</p>
    }

    if(!prevPokemon) {
        return <p>Carregando...</p>
    }

    if(!speciesPokemon) {
        return <p>Carregando...</p>
    }


    return (
        <MainPokedexContainer>
            <MainIMGPokemon>
                <img src={pokemon.sprites.other["official-artwork"].front_default}/>
            </MainIMGPokemon>

            <MainInfo>
                <div>
                    <p className="name">{pokemon.name.toUpperCase()}</p>
                    <FavButtonDiv>
                        <StarIcon size={35} />
                    </FavButtonDiv>
                </div>
                

                <p className="number">#{pokemon.id}</p>
                <div>
                    <p>Peso: {pokemon.weight}</p>

                    <p>Altura: {pokemon.height}</p>
                </div>
            </MainInfo>


            <SectionStats>
                <span>Status</span>
                <InfoStats>
                    <div className="statsinfo">
                        <p>{pokemon.stats[0].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[0].base_stat}</p>
                    </div>

                    <div className="statsinfo">
                        <p>{pokemon.stats[1].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[1].base_stat}</p>
                    </div>

                    <div className="statsinfo">
                        <p>{pokemon.stats[2].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[2].base_stat}</p>
                    </div>

                    <div className="statsinfo">
                        <p>{pokemon.stats[3].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[3].base_stat}</p>
                    </div>

                    <div className="statsinfo">
                        <p>{pokemon.stats[4].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[4].base_stat}</p>
                    </div>

                    <div className="statsinfo">
                        <p>{pokemon.stats[5].stat.name.toUpperCase()}:</p>
                        <p>{pokemon.stats[5].base_stat}</p>
                    </div>
                </InfoStats>
            </SectionStats>
            


            <p>descrição</p>

            <p>variações de abilitys</p>

            <p>cries?</p>

            <ShinySection>
                <p>Versão shiny</p>
                <img src={pokemon.sprites.other["official-artwork"].front_shiny}/>
            </ShinySection>


            <div>
                <Evolution evolutionChain={evolutionPokemon} />
            </div>

            <p>formas alternativas se tiver</p>


            <OthersPokemonSection>
                <Link to={`/pokemon/${prevPokemon.id}`} >
                    <PrevPokemonButton>
                        <img src={prevPokemon.sprites.other["official-artwork"].front_default}/>
                    </PrevPokemonButton>
                </Link>

                <Link to={`/pokemon/${nextPokemon.id}`} >
                    <NextPokemonButton>
                        <img src={nextPokemon.sprites.other["official-artwork"].front_default}/>
                    </NextPokemonButton> 
                </Link>
            </OthersPokemonSection>
            

            {loading && loading ? <img src={Pokebola} alt="Pokebola" /> : <div></div>}
            
        </MainPokedexContainer>
    )
}