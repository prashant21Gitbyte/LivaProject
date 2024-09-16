import react from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from '../screens/HomeTab';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function First() {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,

        alignItems: 'center',
      }}>
      <HomeTab />
    </View>
  );
}

function Second() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}

function Third() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}

function Fourth() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}

function Fifth() {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}></View>
  );
}
const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'My Orders') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'moon' : 'moon-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'cube' : 'cube-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

        tabBarStyle: {
          padding: 5,
          height: 60,
        },

        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? 'tomato' : 'gray',
                fontSize: 14,
                fontWeight: 'bold',
                marginBottom: 9,
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={First}
      />
      <Tab.Screen
        name="Orders"
        options={{headerShown: false}}
        component={Second}
      />
      <Tab.Screen
        name="Cart"
        options={{headerShown: false}}
        component={Third}
      />
      <Tab.Screen
        name="More"
        options={{headerShown: false}}
        component={Fourth}
      />
      <Tab.Screen
        name="My Orders"
        options={{headerShown: false}}
        component={Fifth}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
