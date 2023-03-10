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

function RateItem({rate}: RateItemProps) {
  const countrytoFlagIcon = (country: string): string => {
    switch (country.toLowerCase()) {
      case 'australia':
        return '🇦🇺';
      case 'brazil':
        return '🇧🇷';
      case 'bulgaria':
        return '🇧🇬';
      case 'canada':
        return '🇨🇦';
      case 'china':
        return '🇨🇳';
      case 'denmark':
        return '🇩🇰';
      case 'emu':
        return '🇪🇺';
      case 'hongkong':
        return '🇭🇰';
      case 'hungary':
        return '🇭🇺';
      case 'iceland':
        return '🇮🇸';
      case 'imf':
        return '🇺🇳';
      case 'india':
        return '🇮🇳';
      case 'indonesia':
        return '🇮🇩';
      case 'israel':
        return '🇮🇱';
      case 'japan':
        return '🇯🇵';
      case 'malaysia':
        return '🇲🇾';
      case 'mexico':
        return '🇲🇽';
      case 'new zealand':
        return '🇳🇿';
      case 'norway':
        return '🇳🇴';
      case 'philippines':
        return '🇵🇭';
      case 'poland':
        return '🇵🇱';
      case 'romania':
        return '🇷🇴';
      case 'singapore':
        return '🇸🇬';
      case 'south africa':
        return '🇿🇦';
      case 'south korea':
        return '🇰🇷';
      case 'sweden':
        return '🇸🇪';
      case 'switzerland':
        return '🇨🇭';
      case 'thailand':
        return '🇹🇭';
      case 'turkey':
        return '🇹🇷';
      case 'united kingdom':
        return '🇬🇧';
      case 'usa':
        return '🇺🇸';
      default:
        return '';
    }
  };

  const RowView = styled(View)`
    flex-direction: row;
  `;

  const DataView = styled(View)`
    flex: 4;
  `;

  return (
    <Card>
      <RowView>
        <FlagView flag={countrytoFlagIcon(rate.Country)} />
        <DataView>
          <ItemTitle title={`${rate.Country} ${rate.Currency}`} />
          <ItemText text={`${rate.Amount} ${rate.Code} : ${rate.Rate} CZK`} />
        </DataView>
      </RowView>
    </Card>
  );
}

export default RateItem;
