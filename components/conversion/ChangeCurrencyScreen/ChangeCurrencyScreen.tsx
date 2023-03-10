import React from 'react';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {ThemeProvider} from 'styled-components';
import RateItem from '../../rates/RateItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/ConversionStackNavigator';
import {makeEventNotifier} from '../../general/utils/UseEventListener';

type ConversionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ChangeCurrencyScreen'
>;

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
};

const regularTheme = {
  color: 'black',
  backgroundColor: '#f6f6f6',
};

const notifer = makeEventNotifier<{code: string}>('OnCurrencySelected');

export function useCurrencyPickerListener(listener: typeof notifer.notify) {
  notifer.useEventListener(listener);
}

export default function ChangeCurrencyScreen({
  navigation,
  route,
}: ConversionScreenProps) {
  const scheme = useColorScheme();

  function onPress(code: string) {
    notifer.notify({code});
    navigation.goBack();
  }

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <SafeAreaView>
        <FlatList
          data={route.params.rates}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onPress(item.Code);
                }}>
                <RateItem rate={item} />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
