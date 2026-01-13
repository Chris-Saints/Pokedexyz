import type { PokemonCardBase } from "../../services/pokemonListService"
import { typeLocalMap } from "../../services/pokemonTypes"
import { CardBase, IdBase, PrimaryType, SecondType, TypeBase } from "./pokemonCard.styles"

type CardProps = {
    pokemon: PokemonCardBase
}


export function Pokemoncard({ pokemon }: CardProps) {

    const image = pokemon.sprites.other["official-artwork"].front_default

    const id: number = pokemon.id

    const type: string = typeLocalMap[pokemon.types[0].type.name] ?? pokemon.types[0].type.name

    //Possui um pouco de dificuldade aqui pelo fato da const ficar procurando algo que talvez nao exista. e a solução era o ? no index, pois ele diz que não é obrigatorio, entao se não existe ele nao da erro
    const secondType: string = typeLocalMap[pokemon.types[1]?.type.name] ? typeLocalMap[pokemon.types[1].type.name] ?? pokemon.types[1]?.type.name : ''


    return (
        <CardBase>
            <img src={image} />
            <IdBase>#{id}</IdBase>
            <TypeBase>
                {type && <PrimaryType type={pokemon.types[0]?.type.name}>{type}</PrimaryType>}
                {secondType && <SecondType type={pokemon.types[1]?.type.name}>{secondType}</SecondType>}

            </TypeBase>
        </CardBase>
    )
}