import React, {useState, useEffect} from 'react';
import {StatusBar, View, Text, StyleSheet, Image, Alert} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack} from '../mainStack/homeStack/';
import {colors} from '../../constant';
import {useAuth} from '../../context/authContext';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {user, setToken, setUser} = useAuth();

  const handleLogout = () => {
    props.navigation.closeDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout ? ', [
      {
        text: 'Cancel',
        onPress: () => console.log('Logout cancelled'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          setToken(null);
        },
      },
    ]);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.nameText}>Nehal Jathar</Text>
        <Text style={styles.emailIdText}>jatharnihalp@gmail.com</Text>
      </View>

      <DrawerItem
        label="Dashboard"
        icon={() => <Icon name="home" size={24} color="black" />}
        labelStyle={styles.drawerLabel}
        onPress={() => {
          props.navigation.closeDrawer();
        }}
      />

      <DrawerItem
        label="Master Data Sync"
        icon={() => <Icon name="sync" size={24} color="black" />}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Icon name="logout" size={24} color="black" />}
        labelStyle={styles.drawerLabel}
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

const DrawerStack = ({navigation}) => {
  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#009E88');
    StatusBar.setTranslucent(false);
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={props => <CustomDrawerContent {...props} />}
      backgroundColor={colors.primaryColor}>
      <Drawer.Screen
        name="Suzlon Quality"
        component={HomeStack}
        options={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    marginTop: -10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 10,
  },
  emailIdText: {
    fontSize: 16,
    color: colors.white,
  },
  drawerLabel: {
    color: colors.black,
  },
});

export default DrawerStack;
