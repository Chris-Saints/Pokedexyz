import styled from "styled-components"

export const OthersPokemonSection = styled.section`

    max-width: 100vh;
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;


`


export const PrevPokemonButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0.5rem;
    width: 250px;
    border: none;

    gap: 1rem;

    clip-path: polygon(
        80px 0,
        calc(100% - 0px) 0,
        100% 0px,
        100% calc(100% - 0px),
        calc(100% - 0px) 100%,
        80px 100%,
        0 calc(100% - 55px),
        0 55px
    );

    background-color: ${props => props.theme['--red']};

    transition: 0.2s;

    && img{
        padding: 0.5rem;
        height: 100px;

        background-color: white;
        border-radius: 50%;
    }

    &&:hover{
        transform: scale(1.1);
    }

    && p {
        font-family: ${props => props.theme['--orbitron']};
        font-size: 24px;
        font-weight: bold;
        color: lightgray;
    }
`


export const NextPokemonButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 250px;
    border: none;

    gap: 1rem;

    clip-path: polygon(
        0px 0,
        calc(100% - 80px) 0,
        100% 55px,
        100% calc(100% - 55px),
        calc(100% - 80px) 100%,
        0px 100%,
        0 calc(100% - 0px),
        0 0px
    );


    background-color: ${props => props.theme['--red']};
    transition: 0.2s;

    && img{
        padding: 0.5rem;
        height: 100px;

        background-color: white;
        border-radius: 50%;
    }

    &&:hover{
        transform: scale(1.1);
    }

    && p {
        font-family: ${props => props.theme['--orbitron']};
        font-size: 24px;
        font-weight: bold;
        color: lightgray;
    }
`