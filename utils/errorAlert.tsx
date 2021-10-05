import {Alert} from 'react-native';

export const popUpAlert = (message: string) =>
  Alert.alert('Error', message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
