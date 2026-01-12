import { typeLocalMap, type PokemonCardBase } from "../../services/pokemonApi"
import { CardBase, IdBase, TypeBase } from "./pokemonCard.styles"

type CardProps = {
    pokemon: PokemonCardBase
}

export function Pokemoncard({ pokemon }: CardProps) {

    const image = pokemon.sprites.other["official-artwork"].front_default

    const id = pokemon.id

    const type = typeLocalMap[pokemon.types[0].type.name] ?? pokemon.types[0].type.name
    
    //Resolver Problema com type2

    return (
        <CardBase>
            <img src={image} />
            <IdBase>#{id}</IdBase>
            <TypeBase>
                <p>{type}</p>

                {/* {type2 ? <p>{type2}</p> : <p></p>} */}
            </TypeBase>
        </CardBase>
    )
}