import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

type FlagViewProps = {country: string};

function countrytoFlagIcon(country: string): string {
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
}

export default function FlagView({country}: FlagViewProps) {
  return (
    <StyledFlagView>
      <FlagText>{countrytoFlagIcon(country)}</FlagText>
    </StyledFlagView>
  );
}

const StyledFlagView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0px 4px 0px 4px;
`;

const FlagText = styled(Text)`
  font-size: 30px;
`;
