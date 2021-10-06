/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
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
            headerStyle: {backgroundColor: '#0e7263'},
            headerTitleStyle: {color: '#ffffff'},
          }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={({navigation}: {navigation: any}) => ({
            title: 'User',
            headerStyle: {backgroundColor: '#0e7263'},
            headerTitleStyle: {color: '#ffffff'},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'LoginScreen'}],
                  })
                }>
                <Text style={{color: '#fff', marginRight: 20, fontSize: 15}}>
                  Logout
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
