import React from 'react';
import {View} from 'react-native';
import CurrencyRate from '../../../types/CurrencyRate';
import styled from 'styled-components';
import Card from '../../general/Card';
import FlagView from '../../general/FlagView';
import ItemTitle from '../../general/ItemTitle';
import ItemText from '../../general/ItemText';
import ChangeCurrencyButton from './ChangeCurrencyButton';

type CurrencyItemProps = {
  currentRate: CurrencyRate;
  showChangeButton: boolean;
  didAskToChangeCurrency: () => void;
};

export default function CurrencyItem({
  currentRate,
  showChangeButton,
  didAskToChangeCurrency,
}: CurrencyItemProps) {
  return (
    <Card>
      <RowView>
        <FlagView country={currentRate.Country} />
        <DataView>
          <ItemTitle title={currentRate.Country} />
          <ItemText text={`${currentRate.Currency} (${currentRate.Code})`} />
        </DataView>
        {showChangeButton && (
          <ChangeCurrencyButton
            didAskToChangeCurrency={didAskToChangeCurrency}
          />
        )}
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
