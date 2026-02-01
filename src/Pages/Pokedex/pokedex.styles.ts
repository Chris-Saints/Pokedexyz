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

    padding: 2rem;
    border-radius: 50%;

    border: 5px solid black;

    && img{

        height: 300px;
    }
`

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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

        margin-top: 1rem;
    }
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

//Section Stats


export const SectionStats = styled.section`
    display: flex;
    align-items: start;
    flex-direction: column;
    font-family: ${props => props.theme['--orbitron']};

    max-width: 60vh;
    width: 80%;

    background-color: gray;
    border-radius: 8px;

    padding: 1rem;
    margin: 3rem;

    && span{
        margin-bottom: 1rem;
        font-weight: bold;
    }
`


export const InfoStats = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: black;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    && div{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1rem;

        flex-grow: 2;

        background-color: lightgray;
        border-radius: 8px;
        padding: 0.3rem 0.5rem;
    }
`



//Shiny section

export const ShinySection = styled.section`
    

    && img {
        height: 300px;
    }
`




//Prev e Next Pokemon


export const OthersPokemonSection = styled.section`

    max-width: 100vh;
    width: 100%;

    display: flex;
    justify-content: space-between;


`


export const PrevPokemonButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0.5rem;
    width: 250px;
    border: none;


    background-color: ${props => props.theme['--red']};

    && img{
        padding: 0.5rem;
        height: 100px;

        background-color: white;
        border-radius: 50%;
    }
`


export const NextPokemonButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    width: 250px;
    border: none;


    background-color: ${props => props.theme['--red']};

    && img{
        padding: 0.5rem;
        height: 100px;

        background-color: white;
        border-radius: 50%;
    }
`