import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Ions from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import DrawerScreen from '../screens/DrawerScreen';

const AccountTab = props => {
  const navigation = useNavigation();
  const userData = {
    image: require('../assets/images/personImage.png'),
    name: 'Riya Bhatnagar',
  };

  const currentStage = 5;
  const totalStages = 8;

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <ImageBackground
          source={require('../assets/images/HeroBackground.png')}
          style={styles.HeroBackground}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <Image
                source={require('../assets/images/headicon.png')}
                style={styles.headerIcon}
              />
            </View>

            <View style={styles.headerCenter}>
              <Text style={styles.headerTitle}>Account Details</Text>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/bellNotify.png')}
                  style={styles.notificationIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/userAccount.png')}
                  style={styles.userAccountIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.userInfoContainer}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={userData.image} style={styles.userImage} />
                <Text style={styles.userName}>{userData.name}</Text>
              </View>

              <TouchableOpacity>
                <View>
                  <Image
                    source={require('../assets/images/telephoneIcon.png')}
                    style={styles.telephoneIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity>
                <View style={styles.optionItem}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      borderRadius: 7,
                    }}>
                    <Image
                      source={require('../assets/images/userIcon.png')}
                      style={styles.optionIcon}
                    />
                  </View>

                  <Text style={styles.optionText}>About</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.optionItem}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      borderRadius: 7,
                    }}>
                    <Image
                      source={require('../assets/images/editIcon.png')}
                      style={styles.optionIcon}
                    />
                  </View>
                  <Text style={styles.optionText}>Edit</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.optionItem}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      borderRadius: 7,
                    }}>
                    <Image
                      source={require('../assets/images/trashIcon.png')}
                      style={styles.optionIcon}
                    />
                  </View>
                  <Text style={styles.optionText}>Delete</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.optionItem}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 6,
                      borderRadius: 7,
                    }}>
                    <Image
                      source={require('../assets/images/threeDotsIcon.png')}
                      style={styles.optionIcon}
                    />
                  </View>
                  <Text style={styles.optionText}>More</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <View style={styles.containerProgressIndicator}>
            {/* Circular Progress Indicator */}
            <CircularProgress
              radius={30}
              value={currentStage}
              maxValue={totalStages}
              textColor="#0097A7"
              valueSuffix={`/ ${totalStages}`}
              inActiveStrokeColor="#d3d3d3"
              activeStrokeColor="#0097A7"
              activeStrokeWidth={10}
              inActiveStrokeWidth={10}
            />

            {/* Stage Information */}
            <View style={styles.stageInfo}>
              <Text style={styles.currentStage}>
                Stage {currentStage} Name Here
              </Text>
              <View style={styles.navigation}>
                <Text style={styles.navText}>←Stage 4 Name</Text>
                <Text style={styles.navText}>Stage 6 Name→</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#2D949F',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Image
                source={require('../assets/images/doneringround.png')}
                style={{width: 30, height: 30}}
              />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Mark Status As Complete
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.linksContainer}>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('AccountDetailsRelatedLinks');
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
                Related Quick Links
              </Text>
              <Ions name="chevron-forward-sharp" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('AccountDetailsDetails');
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
                Details
              </Text>
              <Ions name="chevron-forward-sharp" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
                Related
              </Text>
              <Ions name="chevron-forward-sharp" size={20} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
                Feed
              </Text>
              <Ions name="chevron-forward-sharp" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <DrawerScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProgressIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heroContainer: {
    height: 275,
    width: '100%',
  },
  HeroBackground: {
    paddingTop: 30,
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
  },
  headerCenter: {
    flex: 2,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  headerRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  userAccountIcon: {
    width: 30,
    height: 30,
  },
  detailsContainer: {
    width: '100%',
    height: '75%',
    marginTop: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  telephoneIcon: {
    width: 30,
    height: 30,
  },
  optionsContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,.4)',
    flexDirection: 'row',
    gap: 40,
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
  },
  optionItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionIcon: {
    //backgroundColor: 'white',
    width: 30,
    height: 30,
  },
  optionText: {
    textAlign: 'center',
    color: '666666',
  },
  bottomContainer: {
    backgroundColor: '#F6F6F6',
    flex: 1,
    marginTop: -15,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bottomContent: {
    //backgroundColor: 'yellow',
    padding: 10,
    margin: 20,
    gap: 10,
    borderRadius: 10,
  },
  stageInfo: {
    marginLeft: 10,
  },
  currentStage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 5,
    width: 200,
  },
  navText: {
    color: '#a9a9a9',
    //color: 'black',
    fontSize: 14,
  },
  linksContainer: {
    marginTop: 20,
  },
});

export default AccountTab;
