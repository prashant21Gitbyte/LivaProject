import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

function Models() {
  const navigation = useNavigation();
  let account_data = [
    {
      name: 'Virat Kohli',
      email: 'virat.kohli@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Anushka Sharma',
      email: 'anushka.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Ahsan Ahmed',
      email: 'ahsam.ahmed@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Rohit Sharma',
      email: 'rohit.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Rohit Sharma',
      email: 'rohit.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Rohit Sharma',
      email: 'rohit.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Rohit Sharma',
      email: 'rohit.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
    {
      name: 'Rohit Sharma',
      email: 'rohit.sharma@crmlanding.in',
      type: 'Test Drive',
      lead_assign: 'Prashant Bhai',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{height: 100, width: '100%'}}>
        <ImageBackground
          source={require('../assets/images/HeroBackground.png')}
          style={styles.HeroBackground}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BottomTabs');
                }}>
                <Image
                  source={require('../assets/images/Arrow_left.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>

            <View style={{flex: 2}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                Select Models
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
                  source={require('../assets/images/Search.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView
        style={{
          backgroundColor: '#F6F6F6',
          flex: 1,
          marginTop: -20,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: 15,
        }}>
        {account_data.map((data, i) => {
          return (
            <View style={styles.info_block} key={i}>
              <View style={{width: 115, height: 115}}>
                <Image
                  source={require('../assets/images/car.png')}
                  style={{width: '100%', height: '100%', borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  paddingLeft: 15,
                  paddingBottom: 7,
                  height: 115,
                  overflow: 'hidden',
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    color: '#2D949F',
                    fontWeight: '600',
                    fontSize: 19,
                    marginBottom: 11,
                  }}>
                  ModelDV 120
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.label}>Current Order</Text>
                  <Text style={styles.value}>3</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.label}>Inventory Quantity</Text>
                  <Text style={styles.value}>5</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.label}>Dealer Order</Text>
                  <Text style={styles.value}>12</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HeroBackground: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  headerBtn: {
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
  },

  innerView: {flexDirection: 'row', alignItems: 'center', gap: 3},

  info_block: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    marginVertical: 6,
    borderRadius: 8,
    elevation: 3,
  },
  mail_info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#33363f',
  },
  label: {
    color: '#666666',
  },
  value: {
    color: '#000000',
    fontWeight: '500',
  },
});
export default Models;
