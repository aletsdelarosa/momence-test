import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RateScreen from '../rates/RateScreen';

const Stack = createNativeStackNavigator();

export default function RatesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RatesScreen"
        component={RateScreen}
        options={{title: 'Rates'}}
      />
    </Stack.Navigator>
  );
}
