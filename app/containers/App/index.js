/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';

import GlobalStyle, { sizes } from 'global-styles';
import Form from 'containers/Form';

const AppWrapper = styled.div`
  max-width: calc(${sizes.maxPageWidth} + ${sizes.pagePaddingX});
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: ${sizes.pagePaddingY} ${sizes.pagePaddingX};
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Form />
      <GlobalStyle />
    </AppWrapper>
  );
}
