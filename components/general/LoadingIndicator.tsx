import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styled from 'styled-components';

export default function LoadingIndicator() {
  return (
    <StyledView>
      <ActivityIndicator size="large" color="#ff6347" />
      <Text>Loading...</Text>
    </StyledView>
  );
}

const StyledView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
