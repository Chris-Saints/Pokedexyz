import styled from "styled-components";
import type { PokemonTypeEng } from "../../services/pokemonTypes";
import { pokemonTypeColorMap } from "../../utils/pokemonTypeColorMap";

interface CardTypeContainerProps {
    type: PokemonTypeEng
}

export const CardBase = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    border: solid 2px black;

    background: ${props => props.theme['--white']};
    color: black;
    border-radius: 1rem;
    transition: 0.2s;


    img {
        height: 200px;
        background: lightblue;
        border-radius: 8px;
        
    }

    &&:hover {
        transform: scale(1.1);
    }
`

export const IdBase = styled.p`
    color: lightgray;
    font-size: 12px;
`

export const TypeBase = styled.div`
`

export const PrimaryType = styled.div<CardTypeContainerProps>`
    background-color:  ${({ type }) => pokemonTypeColorMap[type]};
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    color: white;
`

export const SecondType = styled.div<CardTypeContainerProps>`
    background-color:  ${({ type }) => pokemonTypeColorMap[type]};
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    color: white;
`