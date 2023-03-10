import {Alert} from 'react-native';

function showErrorAlert(title: string, message: string) {
  return Alert.alert(title, message, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]);
}

export default showErrorAlert;
