import React, {ReactNode} from 'react';
import {View, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

function Card(props: {children: ReactNode}) {
  const scheme = useColorScheme();

  const StyledCard = styled(View)`
    margin: 8px 16px 8px 16px;
    background-color: ${styleProps => styleProps.theme.background};
    border-radius: 16px;
    padding: 8px;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.01);
  `;

  const darkTheme = {
    background: '#202020',
  };

  const regularTheme = {
    background: 'white',
  };

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <StyledCard>{props.children}</StyledCard>
    </ThemeProvider>
  );
}

export default Card;
