// GlobalStyles.tsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    font-family: 'Monarcha', sans-serif; /* Apply Monarcha font to the body */
  }

  /* Additional global styles can be added here */
`;

const FontImport = createGlobalStyle`
  /* Import the Monarcha font */
  @import url('https://use.typekit.net/eub7sqd.css');
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <FontImport />
    <CustomStyles />
  </>
);

export default GlobalStyles;
