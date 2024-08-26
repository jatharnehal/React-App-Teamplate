import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/homeScreen/HomeScreen';

const HomeStackNav = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator
      screenOptions={screenOptions}
      initialRouteName="Dashboard">
      <HomeStackNav.Screen name="Dashboard" component={HomeScreen} />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
