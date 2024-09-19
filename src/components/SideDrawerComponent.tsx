import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeTab from '../screens/HomeTab';
import AccountTab from '../screens/AccountTab';
import StageStatus from '../screens/StageStatus';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AccountTab />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function SideDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Account Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          paddingTop: 50,
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="Account Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Stage Status"
        component={StageStatus}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Drawer Option 1"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Drawer Option 2"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Drawer Option 3"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Drawer Option 4"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
