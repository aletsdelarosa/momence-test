import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ConversionStackNavigator from './ConversionStackNavigator';
import RatesStackNavigator from './RatesStackNavigator';

const Tab = createBottomTabNavigator();

function iconForRoute(
  route: string,
  focused: boolean,
  color: string,
  size: number,
): React.ReactNode {
  let iconName: string = '';

  if (route === 'Rates') {
    iconName = focused ? 'list' : 'list';
  } else if (route === 'Convert') {
    iconName = focused ? 'money' : 'money';
  }

  return <Icon name={iconName} size={size} color={color} />;
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            return iconForRoute(route.name, focused, color, size);
          },
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: false,
          headerShown: false,
        };
      }}>
      <Tab.Screen name="Rates" component={RatesStackNavigator} />
      <Tab.Screen name="Convert" component={ConversionStackNavigator} />
    </Tab.Navigator>
  );
}
