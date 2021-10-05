import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: {color: '#ffffff'},
          }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{
            title: 'User',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: {color: '#ffffff'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
