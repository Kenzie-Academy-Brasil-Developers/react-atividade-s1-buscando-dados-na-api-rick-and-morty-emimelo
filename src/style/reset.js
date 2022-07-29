import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 14px;
  background: #000000;
}
::-webkit-scrollbar {
  height: 14px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 14px 14px  #f9ef1e ;
  border: solid 4px transparent;
  border-radius: 14px;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 14px 14px #f9ef1e ;
}

::-webkit-scrollbar-track {
  display: none;
}

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
time, mark, audio, video, button, input,textarea {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Amatic SC', cursive;
	vertical-align: baseline;
    text-decoration: none;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    background-attachment: fixed;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.hdqwalls.com/download/rick-and-morty-hd-jh-1280x720.jpg");
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
	border-collapse: collapse;
	border-spacing: 0;
}

button {
	cursor: pointer;;
}
`;
export default GlobalStyle;
