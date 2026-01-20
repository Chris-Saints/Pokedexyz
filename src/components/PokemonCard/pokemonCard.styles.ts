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
    justify-content: space-between;
    padding: 1rem;
    gap: 0.5rem;
    border: solid 1px #2c2f33;


    width: 16rem;

    background-image: linear-gradient(to top right,
        lightgray 10%,
        white 25% 50%,
        lightgray 20%
    );
    color: black;
    border-radius: 1rem;
    transition: 0.2s;


    &&:hover {
        transform: scale(1.05);
    }
`

export const ImageContainer = styled.div<CardTypeContainerProps>`

    background-color: ${({ type }) => pokemonTypeColorMap[type]};
    border-radius: 8px;
    padding: 0 5px;
    outline: solid 3px ${({ type }) => pokemonTypeColorMap[type]};
    border: solid 3px ${props => props.theme['--white']};

    && img{
        height: 200px;
        opacity: 100%;
    }
        
`

export const IdBase = styled.div`
    color: gray;
    font-size: 14px;
    font-weight: bold;
`

export const NameContainer = styled.div`
    font-weight: bold;
    font-family: ${props => props.theme['--orbitron']};
    letter-spacing: 2px;
    color: black;
`

export const TypeBase = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const PrimaryType = styled.div<CardTypeContainerProps>`
    background-color:  ${({ type }) => pokemonTypeColorMap[type]};
    
    padding: 0.3rem 0.7rem;
    border-radius: 8px;

    color: ${props => props.theme['--white']};
    font-size: 15px;
    letter-spacing: 1px;
    font-family: ${props => props.theme['--orbitron']};
`

export const SecondType = styled.div<CardTypeContainerProps>`
    background-color:  ${({ type }) => pokemonTypeColorMap[type]};

    padding: 0.3rem 0.7rem;
    border-radius: 8px;

    color: ${props => props.theme['--white']};;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: ${props => props.theme['--orbitron']};
`