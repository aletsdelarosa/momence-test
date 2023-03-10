import React from 'react';
import {View} from 'react-native';
import CurrencyRate from '../../types/CurrencyRate';
import styled from 'styled-components';
import Card from '../general/Card';
import FlagView from '../general/FlagView';
import ItemTitle from '../general/ItemTitle';
import ItemText from '../general/ItemText';

type RateItemProps = {
  rate: CurrencyRate;
};

export default function RateItem({rate}: RateItemProps) {
  return (
    <Card>
      <RowView>
        <FlagView country={rate.Country} />
        <DataView>
          <ItemTitle title={`${rate.Country} ${rate.Currency}`} />
          <ItemText text={`${rate.Amount} ${rate.Code} : ${rate.Rate} CZK`} />
        </DataView>
      </RowView>
    </Card>
  );
}

const RowView = styled(View)`
  flex-direction: row;
`;

const DataView = styled(View)`
  flex: 4;
`;
