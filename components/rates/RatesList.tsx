import React from 'react';
import {FlatList, View} from 'react-native';
import RateItem from './RateItem';
import CurrencyRate from '../../types/CurrencyRate';

type RateScreenProps = {
  rates: CurrencyRate[] | undefined;
};

function RatesList({rates}: RateScreenProps) {
  return rates !== undefined ? (
    <FlatList
      data={rates}
      renderItem={({item}) => <RateItem rate={item} />}
      keyExtractor={rate => rate.Code}
    />
  ) : (
    <View />
  );
}

export default RatesList;
