import React from 'react';
import {Text, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

type ItemTextProps = {text: string};

const darkTheme = {
  color: 'white',
};

const regularTheme = {
  color: 'black',
};

export default function ItemText({text}: ItemTextProps) {
  const scheme = useColorScheme();

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <StyledText>{text}</StyledText>
    </ThemeProvider>
  );
}

const StyledText = styled(Text)`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.color};
`;
