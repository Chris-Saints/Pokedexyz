import styled from "styled-components"

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
        font-size: 24px;
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