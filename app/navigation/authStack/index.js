import * as React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/authScreen/LoginScreen';

const AuthStackNav = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <AuthStackNav.Navigator
      screenOptions={screenOptions}
      initialRouteName="LoginScreen">
      <AuthStackNav.Screen name={'LoginScreen'} component={LoginScreen} />
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;
