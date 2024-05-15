import { createGlobalStyle } from "styled-components";
import PoppinsRegular from '../fonts/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
     @font-face {
        font-family: 'PoppinsRegular';
        src: ${`url(${PoppinsRegular}) format('truetype')`};
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'PoppinsRegular';
        background-color: #7c76f5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }
`;