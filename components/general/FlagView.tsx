import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

type FlagViewProps = {flag: string};

function FlagView({flag}: FlagViewProps) {
  const StyledFlagView = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 0px 4px 0px 4px;
  `;

  const FlagText = styled(Text)`
    font-size: 30px;
  `;

  return (
    <StyledFlagView>
      <FlagText>{flag}</FlagText>
    </StyledFlagView>
  );
}

export default FlagView;
