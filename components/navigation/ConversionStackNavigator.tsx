import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConversionScreen from '../conversion/ConversionScreen/ConversionScreen';
import ChangeCurrencyScreen from '../conversion/ChangeCurrencyScreen/ChangeCurrencyScreen';
import CurrencyRate from '../../types/CurrencyRate';

export type RootStackParamList = {
  ConvertScreen: undefined;
  ChangeCurrencyScreen: {
    rates: CurrencyRate[];
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ConversionStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ConvertScreen"
        component={ConversionScreen}
        options={{
          title: 'Convert',
          headerBackTitleVisible: false,
          headerLargeTitle: false,
        }}
      />
      <Stack.Screen
        name="ChangeCurrencyScreen"
        component={ChangeCurrencyScreen}
        options={{
          title: 'Select currency',
          headerLargeTitle: false,
        }}
      />
    </Stack.Navigator>
  );
}
