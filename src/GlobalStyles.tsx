//@ts-ignore
import { createGlobalStyle } from "styled-components";
import { salutejs_eva__dark } from "@salutejs/plasma-tokens/themes";
import { text } from "@salutejs/plasma-tokens";

const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        color: ${text};
      
        overflow-x: hidden;
        background-image: linear-gradient(26deg, rgba(9, 78, 13, 0.14) 0%, rgba(8, 8, 8, 0.00) 72.24%), radial-gradient(104.89% 141.42% at 0% 100%, rgba(0, 170, 255, 0.12) 0%, rgba(8, 8, 8, 0.00) 99.69%), radial-gradient(108.72% 157.5% at 50% 149.35%, rgba(0, 102, 255, 0.30) 0%, rgba(8, 8, 8, 0.00) 99.69%);
        //background-image:  linear-gradient(26deg, rgba(15, 153, 24, 0.28) 0%, rgba(8, 8, 8, 0.00) 72.24%), radial-gradient(104.89% 141.42% at 0% 100%, rgba(0, 170, 255, 0.24) 0%, rgba(8, 8, 8, 0.00) 99.69%), radial-gradient(108.72% 157.5% at 50% 149.35%, rgba(0, 102, 255, 0.60) 0%, rgba(8, 8, 8, 0.00) 99.69%);
    }
`;
const ThemeStyle = createGlobalStyle(salutejs_eva__dark);

export const GlobalStyle = () => (
  <>
    <DocumentStyle />
    <ThemeStyle />
  </>
);
