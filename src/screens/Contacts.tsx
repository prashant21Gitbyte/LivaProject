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

function Contact() {
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
      <View style={{height: 165, width: '100%'}}>
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
              <TouchableOpacity>
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
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                All Accounts
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

          <View
            style={{
              width: '100%',
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <View style={styles.headerBtn}>
                <AntDesign name="filter" size={18} color="black" />
                <View style={styles.innerView}>
                  <Text>Filter</Text>
                  <AntDesign name="down" size={14} color="black" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.headerBtn}>
                <MaterialIcons name="sort" size={18} color="black" />
                <View style={styles.innerView}>
                  <Text>Sort</Text>
                  <AntDesign name="down" size={14} color="black" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.headerBtn}>
                <Text>New</Text>
              </View>
            </TouchableOpacity>
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
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: '400',
                    lineHeight: 28,
                  }}>
                  {data.name}
                </Text>
                <View style={styles.mail_info}>
                  <Text style={styles.text}>Email:</Text>
                  <Text style={styles.text}>{data.email}</Text>
                </View>
                <View style={styles.mail_info}>
                  <Text style={styles.text}>Type:</Text>
                  <Text style={styles.text}>{data.type}</Text>
                </View>
                <View style={styles.mail_info}>
                  <Text style={styles.text}>Lead Assign:</Text>
                  <Text style={styles.text}>{data.lead_assign}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 6,
                    backgroundColor: '#F6F6F6',
                    borderRadius: 6,
                  }}>
                  <Image
                    source={require('../assets/images/Phone_fill.png')}
                    style={{height: 30, width: 30}}
                  />
                </View>
              </TouchableOpacity>
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
});
export default Contact;
