import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after,
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  --yelow-ish: #FDF0D5;
  --white: #FFFFFF;


  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  /* color-scheme: light dark; */
  background: linear-gradient(var(--yelow-ish), var(--white));
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`