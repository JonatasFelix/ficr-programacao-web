import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Roboto', sans-serif;
        flex-wrap: wrap;
        list-style-type: none;
        box-sizing: border-box;
        z-index: 1;
    }

    body {
        background-color: ${localStorage.getItem('theme') === 'dark' ? 'var(--primary-color-dark)' : 'var(--primary-color-white)'};
        margin: 0 auto;
        max-width: 100vw;
        overflow: hidden;
    }

    button {
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
`;

export default GlobalStyle;