import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ions from 'react-native-vector-icons/Ionicons';

const ContentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ions name="chevron-back-outline" color="white" size={27} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Related Quick Links</Text>
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

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Content awaits!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#2E949F',
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ContentScreen;
