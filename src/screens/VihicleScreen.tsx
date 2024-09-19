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
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

function Vehicle() {
  let account_data = [
    {
      model_name: 'HiModelDV 1201',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
    {
      model_name: 'HiModelDV 120',
      amount: 399490,
    },
  ];

  let navigation = useNavigation();
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
                Select Vehicles
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
          paddingHorizontal: 15,
          paddingVertical: 10,
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
                    color: '#000000',
                    fontSize: 16,
                    lineHeight: 24,
                    marginBottom: 2,
                  }}>
                  {data.model_name}
                </Text>
                <Text
                  style={{color: '#2D949F', fontSize: 22, fontWeight: '600'}}>
                  &#8377; {data.amount}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 12,
                    marginTop: 26,
                  }}>
                  <Text style={styles.label}>Quantity</Text>
                  <View style={{flexDirection: 'row', gap: 15}}>
                    <TouchableOpacity>
                      <View style={styles.quantity_icon}>
                        <Entypo name="minus" size={17} color="#2D949F" />
                      </View>
                    </TouchableOpacity>
                    <Text style={{color: '#666666', fontSize: 18}}>0</Text>
                    <TouchableOpacity>
                      <View style={styles.quantity_icon}>
                        <Entypo name="plus" size={17} color="#2D949F" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={{paddingHorizontal: 15}}>
        <View
          style={{
            backgroundColor: '#ffffff',
            elevation: 3,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
            alignItems: 'center',
            paddingVertical: 14,
          }}>
          <Entypo name="shopping-cart" color="#2D949F" size={18} />
          <Text style={{color: '#2D949F', fontSize: 17, fontWeight: '500'}}>
            Checkout
          </Text>
        </View>
      </View>
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
    marginVertical: 7,
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
  quantity_icon: {
    backgroundColor: '#F6F6F6',
    padding: 3,
    elevation: 3,
    borderRadius: 3,
  },
  ant_icon: {
    fontWeight: '500',
  },
});
export default Vehicle;
