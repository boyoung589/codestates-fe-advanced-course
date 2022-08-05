import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    *,
    :after,
    :before {
        margin: 0;
        box-sizing: border-box;
    };

    html {
        /* background-color: #fffaeb; */
        background-color: whitesmoke;
        color: black;
        font-size: 16px;
        
        ${media.lessThan('medium')`
            font-size: 14px;
        `}
    };
`
export default GlobalStyle;