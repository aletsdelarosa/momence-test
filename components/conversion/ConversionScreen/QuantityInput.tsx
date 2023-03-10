import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputEndEditingEventData,
  useColorScheme,
} from 'react-native';
import styled, {ThemeProvider} from 'styled-components';
import Card from '../../general/Card';

type QuantityInputProps = {
  onEndEditing: (text: string) => void;
  value: number;
};

const darkTheme = {
  backgroundColor: '#333333',
  color: 'white',
};

const regularTheme = {
  backgroundColor: '#f0f0f0',
  color: 'black',
};

export default function QuantityInput(props: QuantityInputProps) {
  const scheme = useColorScheme();

  function onEndEditingQuantity(
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) {
    props.onEndEditing(event.nativeEvent.text);
  }

  return (
    <ThemeProvider theme={scheme === 'dark' ? darkTheme : regularTheme}>
      <Card>
        <StyledInput
          defaultValue={`${props.value}`}
          keyboardType="decimal-pad"
          inputMode="decimal"
          onEndEditing={onEndEditingQuantity}
          returnKeyType="done"
          textAlign="right"
        />
      </Card>
    </ThemeProvider>
  );
}

const StyledInput = styled(TextInput)`
  height: 48px;
  background-color: ${styleProps => styleProps.theme.backgroundColor};
  border-radius: 16px;
  padding: 16px;
  margin: 0px;
  text-align: right;
  color: ${styleProps => styleProps.theme.color};
`;
