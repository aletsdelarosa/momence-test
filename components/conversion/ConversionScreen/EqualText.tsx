import React from 'react';
import {Text, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

type CurrencyTextProps = {text: string};

function EqualText({text}: CurrencyTextProps) {
  const scheme = useColorScheme();

  const StyledCurrencyText = styled(Text)`
    margin: 8px 16px 8px 16px;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme.color};
    text-align: center;
  `;

  const darkTheme = {
    color: 'white',
  };

  const regularTheme = {
    color: 'black',
  };

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <StyledCurrencyText>{text}</StyledCurrencyText>
    </ThemeProvider>
  );
}

export default EqualText;
