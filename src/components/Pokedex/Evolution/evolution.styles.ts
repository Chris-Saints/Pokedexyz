import styled from "styled-components";

export const EvolutionSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: gray;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 8px;


    font-family: ${props => props.theme['--orbitron']};
    font-weight: bold;

    && span{
        font-size: 24px;
        margin-bottom: 1rem;
    }
`

export const SequenceEvolutionDiv = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

export const EvolutionImg = styled.img`
   
    height: 180px;
`

export const EvolutionCard = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.5rem;
    border-radius: 8px;
    border: 5px solid lightgray;

    background-color: lightgray;

    text-align: center;
    font-family: ${props => props.theme['--orbitron']};
    font-weight: bold;
    


`