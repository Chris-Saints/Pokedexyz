import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;



    background-color: ${props => props.theme['--red']};
    max-width: 100%;
    width: 100vh;

    && img{
        height: 10rem;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-width: 100%;
    width: 75%;

    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
`

export const ButtonNavContainer = styled.button`
    background-color: ${props => props.theme['--red']};
    color: ${props => props.theme['--white']};
    font-weight: bold;

    border: solid 3px ${props => props.theme['--red']};
    padding: 1rem;

    border-bottom: none;
    transition: 0.3s;

    &&:hover {
        background-color: ${props => props.theme['--white']};
        color: ${props => props.theme['--red']}
    }
`
