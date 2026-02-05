import { useEffect, useState } from "react"
import type { Pokemon } from "../../../types/pokemonGlobalAPIType"
import { fetchAbilities } from "../../../services/pokemonApi"
import type { AbilityType } from "../../../types/pokemonAbilityType"
import { AbilitySection, AbilityTable } from "./abilities.styles"
import { nomeMaiusculo } from "../../../utils/pokemonUtils"

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
        <AbilitySection>

            <h2>Ability</h2>

            {abilities && abilities.map((ability) => {
                const englishEffect = ability.effect_entries.find(
                    entry => entry.language.name === "en"
                );

                
                return (
                    <AbilityTable key={ability.id}>
                        <thead>
                            <tr>
                                <th>
                                    {nomeMaiusculo(ability.name)}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {englishEffect?.effect}
                                </td>
                            </tr>
                            
                        </tbody>
                    </AbilityTable>
                )
            })}

        </AbilitySection>
    )
}