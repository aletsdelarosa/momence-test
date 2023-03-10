import React from 'react';
import {Text, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';

type ItemTitleProps = {
  title: string;
};

function ItemTitle({title}: ItemTitleProps) {
  const scheme = useColorScheme();

  const StyledTitle = styled(Text)`
    font-size: 16px;
    font-weight: 500;
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
      <StyledTitle>{title}</StyledTitle>
    </ThemeProvider>
  );
}

export default ItemTitle;
