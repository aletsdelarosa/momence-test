import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

function ScreenView(props: {children: ReactNode}) {
  const StyledScreenView = styled(View)`
    flex: 1;
  `;

  return <StyledScreenView>{props.children}</StyledScreenView>;
}

export default ScreenView;
