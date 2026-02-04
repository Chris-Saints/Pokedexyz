import { useEffect, useState } from "react"
import type { Pokemon } from "../../../types/pokemonGlobalAPIType"
import { fetchAbilities } from "../../../services/pokemonApi"
import type { AbilityType } from "../../../types/pokemonAbilityType"

interface AbilitiesProps {
    pokemon: Pokemon | null
}

export function Abilities({pokemon}: AbilitiesProps) {

    const [abilities, setAbilities] = useState<AbilityType[]>([])
    

    useEffect(() => {
        async function AbilitiesLoad() {

            setAbilities([])

            if(!pokemon) {
                return
            }

            const names = pokemon.abilities.map(ability => {return ability.ability.name})

            const arrayAbility = await Promise.all(
                names.map(name => fetchAbilities(name))
            )

            setAbilities(arrayAbility)


        }

        AbilitiesLoad()
    }, [pokemon])


    return(
        <div>

            {abilities && abilities.map(ability => {
                return (
                    <div key={ability.id}>
                        <div>{ability.name}</div>
                        <div>{ability.effect_entries[0].effect}</div>
                    </div>
                )
            })}

        </div>
    )
}