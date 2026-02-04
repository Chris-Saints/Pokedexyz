import { Link } from "react-router-dom";
import { NextPokemonButton, OthersPokemonSection, PrevPokemonButton } from "./sidePokemon.styles";
import type { Pokemon } from "../../../types/pokemonGlobalAPIType";

interface SidePokemonProps {
    nextPokemon: Pokemon | null;
    prevPokemon: Pokemon | null
}

export function SidePokemon({prevPokemon, nextPokemon}: SidePokemonProps) {
    
    return(
        <OthersPokemonSection>
                {prevPokemon && <Link to={`/pokemon/${prevPokemon.id}`} >
                        <PrevPokemonButton>
                            <p>#{prevPokemon.id}</p>
                            <img src={prevPokemon.sprites.other["official-artwork"].front_default}/>
                            
                        </PrevPokemonButton>
                    </Link>
                }

                {nextPokemon && <Link to={`/pokemon/${nextPokemon.id}`} >
                        <NextPokemonButton>
                            
                            <img src={nextPokemon.sprites.other["official-artwork"].front_default}/>
                            <p>#{nextPokemon.id}</p>
                        </NextPokemonButton> 
                    </Link>
                }
            </OthersPokemonSection>
    )
}