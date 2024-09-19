import react from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from '../screens/HomeTab';
import AccountTab from '../screens/AccountTab';
import ProgressSection from '../screens/ProgressIndicator';
import DrawerScreen from '../screens/DrawerScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SideDrawer from './SideDrawerComponent';

import StatusIndicator from './StatusIndicatorAccountDetails';
import Contact from '../screens/Contacts';

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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ProgressSection />
    </View>
  );
}

function Third() {
  return <SideDrawer />;
}

function Fourth() {
  // return <DrawerScreen />;
  return <Contact />;
}

function Fifth() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusIndicator />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //tabBarActiveTintColor: 'tomato',
        //tabBarInactiveTintColor: 'white',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Leads') {
            iconName = focused ? 'star' : 'star-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'mail' : 'mail-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'menu' : 'menu-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2D949F',
        tabBarInactiveTintColor: '#33363F',

        tabBarStyle: {
          padding: 5,
          height: 60,
        },

        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? '#2D949F' : '#33363F',
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
        name="Leads"
        options={{headerShown: false}}
        component={Second}
      />
      <Tab.Screen
        name="Account"
        options={{headerShown: false}}
        component={Third}
      />
      <Tab.Screen
        name="Contact"
        options={{headerShown: false}}
        component={Fourth}
      />
      <Tab.Screen
        name="Menu"
        options={{headerShown: false}}
        component={Fifth}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
