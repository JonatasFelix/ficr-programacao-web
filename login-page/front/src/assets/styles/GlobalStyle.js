import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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
        background: linear-gradient(329deg, rgba(115,0,255,1) 25%, rgba(255,136,0,1) 92%);
        margin: 0 auto;
        max-width: 100vw;
        overflow: hidden;
        min-height: 100vh;
        width: 100vw;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    button {
        cursor: pointer;
    }

    label {
        cursor: pointer;
    }
`;

export default GlobalStyle;

export const Container = styled.div`
    width: 50vw;
    height: 50vh;
    background: #ffffff;

    min-width: 350px;
    min-height: 350px;

    border-radius: 80px 5px;
`;