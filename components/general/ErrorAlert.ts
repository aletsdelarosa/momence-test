import {Alert} from 'react-native';

export default function showErrorAlert(title: string, message: string) {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
}
