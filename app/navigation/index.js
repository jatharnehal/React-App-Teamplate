import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import AuthStack from './authStack';
import {DrawerStack} from './mainStack';
import SplashScreen from '../screens/splashScreen/';
import {useAuth} from '../context/authContext';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  const [loading, setLoading] = React.useState(true);
  const {setToken, setUser, token} = useAuth();

  React.useEffect(() => {
    const getToken = async () => {
      try {
        setToken();
      } catch (error) {
        console.log(error);
      }
    };

    const timeoutId = setTimeout(() => setLoading(false), 3000);
    getToken();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {loading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : token ? (
          <Stack.Screen name={'DrawerStack'} component={DrawerStack} />
        ) : (
          <Stack.Screen name={'AuthStack'} component={AuthStack} />
        )}
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default AppNavigator;
