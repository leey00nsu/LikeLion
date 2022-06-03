import { createGlobalStyle } from "styled-components";

//yarn add styled-reset
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "black",
  bgColor: "white",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "black",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
