import React from 'react';
import {Text, StatusBar} from 'react-native';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import BottomTabsNavigator from './BottomTabsNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabs"
          component={BottomTabsNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
