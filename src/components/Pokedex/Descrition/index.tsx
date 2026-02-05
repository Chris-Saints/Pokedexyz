import { useEffect, useState } from "react"
import type { Pokemon } from "../../../types/pokemonGlobalAPIType"
import { fetchSpecie } from "../../../services/pokemonApi"
import type { PokemonSpeciesType } from "../../../types/pokemonSpeciesType"

interface DescritionProps {
    pokemon: Pokemon
}

export function Description({pokemon}: DescritionProps) {

    const [speciePokemon, setSpeciePokemon] = useState<PokemonSpeciesType | null>(null)

    useEffect(()=> {
        async function SpeciePokemon() {
            if (!pokemon) return

            const species = await fetchSpecie(pokemon.name);

            setSpeciePokemon(species);


        }
        SpeciePokemon()
    },[pokemon])

    if(!speciePokemon) {
        return<div>carregando...</div>
    }

    const englishDescription = speciePokemon.flavor_text_entries.find(entry => entry.language.name === "en");




    return(
        <div>
            
            {englishDescription?.flavor_text ?? "Descrição não disponivel"}

        </div>
    )
}