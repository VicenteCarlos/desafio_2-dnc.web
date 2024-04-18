import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
    }

    html {
        font-size: 16px;
    }

    body {
        font-family: "Inter", sans-serif;
        background-color: #F2F2F2;
        color: black;
    }
`;
