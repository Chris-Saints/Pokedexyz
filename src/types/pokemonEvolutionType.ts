

type EvolutionDetailsPokemon ={
    item?: string | null
    trigger: {
        name: string,
        url: string
    }
    gender?: string | null,
    held_item?: string | null,
    known_move?: string | null,
    known_move_type?: string | null,
    location?: string | null,
    min_level: number
    min_happiness?: number | null
    min_beauty?: number | null
    min_affection?: number | null
    needs_overworld_rain: boolean
    party_species?: string | null
    party_type?: string | null
    relative_physical_stats?: number | null
    time_of_day: string
    trade_species?: string | null
    turn_upside_down: boolean
}

type EvolvesToPokemon = {
    is_baby: boolean,
    species: {
        name: string,
        url: string,
    },
    evolution_details: EvolutionDetailsPokemon[]
    evolves_to?: EvolvesToPokemon[] | null
}


export type EvolutionTypePokemon = {
    id: number,
    baby_trigger_item?: string | null;
    chain: {
        is_baby: boolean;
        species: {
            name: string,
            url: string,
        },
        evolution_details?: string | null,
        evolves_to: EvolvesToPokemon[]
    }
}


//Aparentemente cada corrente de evolução tem uma id diferente, entao por exemplo a id 1 é toda a corrente evolutiva do bulbassauro e a 2 é do charmander... então verificar se tem uma forma de conseguir essa id quando fizer a fetch do pokemon para pagina. talvez https://pokeapi.co/api/v2/pokemon-species/4/ mostra qual corrente de evolução ele esta.