import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

export default function ScreenView(props: {children: ReactNode}) {
  return <StyledScreenView>{props.children}</StyledScreenView>;
}

const StyledScreenView = styled(View)`
  flex: 1;
`;
