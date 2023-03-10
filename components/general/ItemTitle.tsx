import React from 'react';
import {Text, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

type ItemTitleProps = {
  title: string;
};

const darkTheme = {
  color: 'white',
};

const regularTheme = {
  color: 'black',
};

export default function ItemTitle({title}: ItemTitleProps) {
  const scheme = useColorScheme();

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <StyledTitle>{title}</StyledTitle>
    </ThemeProvider>
  );
}

const StyledTitle = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.color};
`;
