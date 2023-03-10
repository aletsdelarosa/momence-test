import React from 'react';
import {Text, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

type ItemTextProps = {text: string};

function ItemText({text}: ItemTextProps) {
  const scheme = useColorScheme();

  const StyledText = styled(Text)`
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.color};
  `;

  const darkTheme = {
    color: 'white',
  };

  const regularTheme = {
    color: 'black',
  };

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <StyledText>{text}</StyledText>
    </ThemeProvider>
  );
}

export default ItemText;
