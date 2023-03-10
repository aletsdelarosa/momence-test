import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import {useColorScheme} from 'react-native';

function NavContainer() {
  const scheme = useColorScheme();

  const defaultTheme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#ff6347',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default NavContainer;
