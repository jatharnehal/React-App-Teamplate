import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import AuthStack from './authStack';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
        <Stack.Screen name={'Dashboard'} component={HomeScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigator;
