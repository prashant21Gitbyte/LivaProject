import react from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const AccountTab = () => {
  const userData = {
    image: require('../assets/images/personImage.png'),
    name: 'Riya Bhatnagar',
  };

  return (
    <View style={styles.container}>
      <View style={{height: 275, width: '100%'}}>
        <ImageBackground
          source={require('../assets/images/HeroBackground.png')}
          style={styles.HeroBackground}>
          {/*Header */}

          <View
            style={{
              width: '100%',
              //backgroundColor: 'red',
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
                Account Details
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

          <View
            style={{
              //backgroundColor: 'white',
              width: '100%',
              height: '75%',
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image
                  source={userData.image}
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  Riya Bhatnagar
                </Text>
              </View>
              <TouchableOpacity>
                <View>
                  <Image
                    source={require('../assets/images/telephoneIcon.png')}
                    style={{width: 30, height: 30}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          backgroundColor: '#F6F6F6',
          flex: 1,
          marginTop: -15,
          borderRadius: 20,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            margin: 20,
            gap: 10,
            borderRadius: 10,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  itemContainer: {
    margin: 0,
    //backgroundColor: 'yellow',
    width: 270, // Full width of the screen
    justifyContent: 'center', // Center image vertically
    alignItems: 'center', // Center image horizontally
  },
  image: {
    //backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
    //height: '90%',
    resizeMode: 'contain',
  },
  flatListContentContainer: {
    // Add horizontal padding for spacing
    //paddingHorizontal: 10, // Adjust as needed
    margin: 0,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    padding: 20,
    paddingTop: 40,
  },
  countBySource: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    textAlign: 'left',
  },
});

export default AccountTab;
