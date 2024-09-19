import React from 'react';
import {Text, StatusBar} from 'react-native';
import Login from '../screens/Login';
import Splash from '../screens/Splash';
import SignUp from '../screens/SignUp';
import BottomTabsNavigator from './BottomTabsNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailsScreen';
import RelatedQuicKLinks from '../screens/RelatedQuickLinks';
import Vehicle from '../screens/VihicleScreen';
import Models from '../screens/ModelsScreen';

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

        <Stack.Screen
          options={{headerShown: false}}
          name="AccountDetailsDetails"
          component={DetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AccountDetailsRelatedLinks"
          component={RelatedQuicKLinks}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Vehicle"
          component={Vehicle}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Models"
          component={Models}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
