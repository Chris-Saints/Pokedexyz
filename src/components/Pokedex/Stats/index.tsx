import type { Pokemon } from "../../../types/pokemonGlobalAPIType";
import { InfoStats, SectionStats } from "./Stats.styles";

interface StatsProps {
    pokemon: Pokemon
}

export function Stats({ pokemon }: StatsProps) {
    return(
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
    )
}