import styled from "styled-components";
import { pokemonGenColorMap } from "../../utils/pokemonTypeColorMap";

interface FilterGenProps {
    filter: number;
}

export const MainHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

export const FilterContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

`

export const InputContainer = styled.div`
    display: flex;
    gap: 1rem;

    max-width: 100%;
    width: 100%;

    && input {
        border: solid 4px black;

        border-bottom: solid 4px darkgray;
        border-right: solid 4px darkgray;

        border-top: solid 4px lightgray;
        border-left: solid 4px lightgray;

        max-width: 100%;
        width: 90%;


        border-radius: 100px;
        padding: 0.5rem 1rem;

        color: black;
        
    }
    && input:focus{
        outline: solid 2px ${props => props.theme['--red-dark']};
    }
    && input::placeholder{
        color: #2c2f33;
        font-family: "Orbitron", sans-serif;
        font-weight: bold;
        opacity: 50%;
    }

    && button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;

        padding: 0.5rem;

        background-color: ${props => props.theme['--red']};

        border-radius: 50%;
    }
    && button:hover{
        background-color: ${props => props.theme['--red-dark']};
    }
    
`

export const FilterButtonContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const ButtonGeneration = styled.button<FilterGenProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;

    background-color: ${({ filter }) => pokemonGenColorMap[filter]};
    color: ${props => props.theme['--white']} ;
    border: solid 2px ${({ filter }) => pokemonGenColorMap[filter]};

    font-family: "Orbitron", sans-serif;
    font-size: 20px;

    width: 50px;
    height: 50px;


    border-radius: 8px;
    transition: 0.2s;


    &&:hover{
        background-color: ${props => props.theme['--white']};
        color: ${({ filter }) => pokemonGenColorMap[filter]};;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 1.5rem;


    max-width: 100%;
    width: 80%;
`

export const ButtonMoreLoad = styled.button`

    width: 200px;
    height: 80px;
    background-color: ${props => props.theme['--red']};
    border: solid 3px ${props => props.theme['--red']};
    color: ${props => props.theme['--white']};
    border-radius: 5px;

    font-size: 20px;
    font-weight: bold;

    transition: 0.2s;

    &&:hover{
        background-color: ${props => props.theme['--white']};
        color: ${props => props.theme['--red']};
    }
`

//Animação de rotação da pokebola, mas nao funcionou. ver depois

// const rotate360 = keyframes
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }
// `

 export const LoadImage = styled.img`
    height: 100px;

`