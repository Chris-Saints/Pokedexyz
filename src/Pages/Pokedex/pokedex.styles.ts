import styled from "styled-components";

export const MainPokedexContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const MainIMGPokemon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 300px;

    background-image: linear-gradient(to top,

        white 25% 50%,
        red 20%
    );

    padding: 2rem;
    border-radius: 50%;

    border: 5px solid black;

    && img{
        padding: 1rem;
        height: 250px;
    }
`

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;

    && .name{
        font-size: 25px;
        font-weight: bold;
    }

    && .number{
        font-size: 16px ;
        color: gray;
    }

    && div{
        display: flex;
        align-items: center;
        justify-content: center ;
        gap: 1rem;

    }
`

export const InfoTypesAndWeight = styled.div`
    display: flex;
    flex-direction: column;
`

export const FavButtonDiv = styled.button`
    display: flex;
    background-color: transparent;
    border: none;

    &&:hover{
        background-color: yellow;
        //So pra nao esquecer
    }
`

export const TypeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


//Shiny section

export const ShinySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    gap: 2rem;

    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: ${props => props.theme['--orbitron']};
    font-weight: bold;

    
    && div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 300px;

        background-image: linear-gradient(to top,

            white 25% 50%,
            purple 20%
        );

        padding: 2rem;
        border-radius: 50%;

        border: 5px solid black;
    }

    && img {

        padding: 1rem;
        height: 250px;
    }
`



