import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CustomHeader = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/images/headicon.png')}
          style={{width: 30, height: 30}}
        />
      </View>

      <View style={{flex: 2}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 17,
          }}>
          Home
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/bellNotify.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/userAccount.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red', // Header background color
    elevation: 3, // Optional shadow for Android
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CustomHeader;
