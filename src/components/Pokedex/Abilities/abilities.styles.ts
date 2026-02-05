import styled from "styled-components";

export const AbilitySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;


    && h2 {
        font-family: ${props => props.theme['--orbitron']};
        font-weight: bold;
        font-size: 24px;

        margin-bottom: 1rem;
    }
`

export const AbilityTable = styled.table`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 55%;


    text-align: center;
    border: solid 2px black;
    border-radius: 8px;

    background-color: gray;
    color: white;

    && thead{
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        height: 15vh;
        border-right: solid 2px black;

    }

    && tbody {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;
    }
`