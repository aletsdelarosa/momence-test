import React, {useState} from 'react';
import CurrencyRate from '../../../types/CurrencyRate';
import {useQuery} from 'react-query';
import LoadingIndicator from '../../general/LoadingIndicator';
import showErrorAlert from '../../general/ErrorAlert';
import RatesService from '../../../services/RatesService';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ScreenView from '../../general/ScreenView';
import EqualText from './EqualText';
import CurrencyItem from './CurrencyItem';
import QuantityInput from './QuantityInput';
import styled from 'styled-components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/ConversionStackNavigator';

type ConversionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ConvertScreen'
>;

function ConversionScreen({navigation}: ConversionScreenProps) {
  const [korunaQuantity, setKorunaQuantity] = useState<number>(1);
  const [currencyQuantity, setCurrencyQuantity] = useState<number>(1);
  const [currentCurrencyCode, setCurrentCurrencyCode] = useState<string>('');

  const KorunaRate = {
    Country: 'Czech Republic',
    Code: 'CZK',
    Currency: 'koruna',
    Amount: 1,
    Rate: 1,
  };

  const {data, error, isError, isLoading} = useQuery<
    Map<string, CurrencyRate> | undefined,
    Error
  >('conversion-rates', async () => {
    const rates = await RatesService.getRates();

    if (rates !== undefined) {
      const firstCurrency: CurrencyRate = rates.values().next().value;

      setCurrencyQuantity(
        Number(
          (
            (korunaQuantity * firstCurrency.Amount) /
            firstCurrency.Rate
          ).toFixed(2),
        ),
      );

      setCurrentCurrencyCode(firstCurrency.Code);
    }

    return rates;
  });

  const fromKorunaToCurrency = (quantity: number, toCurrency: string) => {
    const currency: CurrencyRate = data?.get(toCurrency) ?? KorunaRate;

    const newRate = (quantity * currency.Amount) / currency.Rate;

    setCurrencyQuantity(Number(newRate.toFixed(2)));
    setKorunaQuantity(quantity);
  };

  const fromCurrencyToKoruna = (quantity: number) => {
    const currency: CurrencyRate = data?.get(currentCurrencyCode) ?? KorunaRate;

    const newRate = (quantity * currency.Rate) / currency.Amount;

    setKorunaQuantity(Number(newRate.toFixed(2)));
    setCurrencyQuantity(quantity);
  };

  const onEndKorunaEditing = (value: string) => {
    fromKorunaToCurrency(Number(value), currentCurrencyCode);
  };

  const onEndCurrencyEditing = (value: string) => {
    fromCurrencyToKoruna(Number(value));
  };

  const didAskToChangeCurrency = () => {
    navigation.navigate('ChangeCurrencyScreen', {
      rates: rates(),
      didSelectNewCurrency: didSelectNewCurrency,
    });
  };

  const didSelectNewCurrency = (code: string) => {
    setCurrentCurrencyCode(code);

    const currency: CurrencyRate = data?.get(code) ?? KorunaRate;

    fromKorunaToCurrency(korunaQuantity, currency.Code);
  };

  const rates = () => {
    let ratesArray: CurrencyRate[] = [];

    if (data !== undefined) {
      for (let value of data.values()) {
        ratesArray.push(value);
      }
    }

    return ratesArray;
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    showErrorAlert('Error while loading', error.message);

    return <View />;
  }

  if (data === undefined) {
    showErrorAlert('Error while loading', 'Try Again later.');

    return <View />;
  }

  const DismissKeyboardView = styled(KeyboardAvoidingView)`
    flex: 1;
  `;

  return (
    <ScreenView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <DismissKeyboardView>
          <QuantityInput
            onEndEditing={onEndKorunaEditing}
            value={korunaQuantity}
          />
          <CurrencyItem
            currentRate={KorunaRate}
            showChangeButton={false}
            didAskToChangeCurrency={didAskToChangeCurrency}
          />
          <EqualText text={'='} />
          <QuantityInput
            onEndEditing={onEndCurrencyEditing}
            value={currencyQuantity}
          />
          <CurrencyItem
            currentRate={data.get(currentCurrencyCode) ?? KorunaRate}
            showChangeButton={true}
            didAskToChangeCurrency={didAskToChangeCurrency}
          />
        </DismissKeyboardView>
      </TouchableWithoutFeedback>
    </ScreenView>
  );
}

export default ConversionScreen;
