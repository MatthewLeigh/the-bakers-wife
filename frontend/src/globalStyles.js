import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --background-color: #ffffff;
        --primary-color:rgb(64, 39, 155);
        --text-color: #000000;
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    a {
        color: var(--primary-color);
        text-decoration: none;
    }

`;

export default GlobalStyles;
