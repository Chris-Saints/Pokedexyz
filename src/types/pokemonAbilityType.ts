type Name = {
    name: string,
    language: {name: string, url: string}
}

type Effect_entries = {
    effect: string,
    short_effect: string,
    language: {name: string, url: string}
}

type Effect_changes = {
    version_group: {name: string, url: string},
    effect_entries: {effect: string, language: {name: string, url: string}}
}

type Flavor_text_entries = {
    flavor_text: string,
    language: {name: string, url: string},
    version_group: { name: string, url: string}
}

type whoPokemonHasAbility = {
    is_hidden: boolean,
    slot: number,
    pokemon: {name: string, url: string}
}

export type AbilityType = {
    id: number,
    name: string,
    is_main_series: boolean,
    generation: {name: string, url: string},
    names: Name[],
    effect_entries: Effect_entries[],
    effect_changes: Effect_changes[],
    flavor_text_entries: Flavor_text_entries[],
    pokemon: whoPokemonHasAbility[],
}