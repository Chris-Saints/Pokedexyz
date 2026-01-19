import styled from "styled-components";

export const NavGeneration = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const ButtonGeneration = styled.button`
    background-color: red;
    color: ${props => props.theme['--white']};
    border: solid 2px red;
    padding: 0.5rem 1rem;
    border-radius: 8px;


    &&:hover{
        background-color: ${props => props.theme['--white']};
        color: red;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-width: 100%;
    width: 90;
`