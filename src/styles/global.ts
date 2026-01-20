import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #F1F1F1;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input:focus{
        border-color: ${props => props.theme['--red']};
    }

    body, textarea, input, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    button:hover {
        cursor: pointer;
    }
`