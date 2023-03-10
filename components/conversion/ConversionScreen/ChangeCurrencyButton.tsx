import React from 'react';
import {TouchableOpacity, View, useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ChangeCurrencyButtonProps = {
  didAskToChangeCurrency: () => void;
};

function ChangeCurrencyButton({
  didAskToChangeCurrency,
}: ChangeCurrencyButtonProps) {
  const scheme = useColorScheme();

  const ButtonView = styled(View)`
    width: 48px;
    height: 48px;
    background-color: ${props => props.theme.backgroundColor};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
  `;

  const darkTheme = {
    backgroundColor: '#333333',
    color: 'white',
  };

  const regularTheme = {
    backgroundColor: '#f0f0f0',
    color: 'black',
  };

  const onPressChangeButton = () => {
    didAskToChangeCurrency();
  };

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <TouchableOpacity onPress={onPressChangeButton}>
        <ButtonView>
          <Icon
            name={'sync'}
            size={32}
            color={scheme === 'dark' ? darkTheme.color : regularTheme.color}
          />
        </ButtonView>
      </TouchableOpacity>
    </ThemeProvider>
  );
}

export default ChangeCurrencyButton;
