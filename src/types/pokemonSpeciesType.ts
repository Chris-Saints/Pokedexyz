import type { NamedAPIResource } from "./pokemonGlobalAPIType";

export type PokedexNumber = {
  entry_number: number;
  pokedex: NamedAPIResource;
};

export type NameByLanguage = {
  name: string;
  language: NamedAPIResource;
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
};

export type FormDescription = {
  description: string;
  language: NamedAPIResource;
};

export type Genus = {
  genus: string;
  language: NamedAPIResource;
};

export type Variety = {
  is_default: boolean;
  pokemon: NamedAPIResource;
};



export type PokemonSpeciesType = {
  id: number;
  name: string;
  order: number;

  gender_rate: number;
  capture_rate: number;
  base_happiness: number;

  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;

  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;

  growth_rate: NamedAPIResource;

  pokedex_numbers: PokedexNumber[];

  egg_groups: NamedAPIResource[];

  color: NamedAPIResource;
  shape: NamedAPIResource;

  evolves_from_species?: NamedAPIResource | null;

  evolution_chain: {
    url: string;
  };

  habitat?: NamedAPIResource | null;

  generation: NamedAPIResource;

  names: NameByLanguage[];

  flavor_text_entries: FlavorTextEntry[];

  form_descriptions: FormDescription[];

  genera: Genus[];

  varieties: Variety[];
};
