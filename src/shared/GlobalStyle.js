import { createGlobalStyle } from "styled-components";

const GlovalStyle = createGlobalStyle`

:root{
  --color-main: #FF385C;
  --color-button: #FF385C;
  --color-button-hober: #BD1E59;
  --color-border: #222222;
  --color-border-bg: lightgray;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-style: normal;
  font-weight: 700;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
  font-family: "Pretendard";
}

body {
  height: 100%;
}
`;

export default GlovalStyle;
