import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-spacing: 0;
}

html{
    @media(max-width:1080px){
        font-size: 93.75%; //15px
    }

    @media(max-width:720px){
        font-size: 87.5%; //14px
    }
}

body{
    box-sizing: border-box;
    -web-kit-font-smooth: atialiased;
    background: ${Colors.background};
}
body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
}
button{
    cursor: pointer;
    [disabled]{
        opacity: 0.6;
        cursor:not-allowed
    }
}

.react-modal-overlay{
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}
.react-modal-content{
    width: 100%;
    max-width: 36rem;
    padding: 3rem;
    background: ${Colors.white};
    position: relative;
    border-radius: 0.25rem;
}


`;
