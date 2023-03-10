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

function CurrencyItem({
  currentRate,
  showChangeButton,
  didAskToChangeCurrency,
}: CurrencyItemProps) {
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
      case 'czech republic':
        return '🇨🇿';
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
        <FlagView flag={countrytoFlagIcon(currentRate.Country)} />
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

export default CurrencyItem;
