import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';

const banners = [
  {id: '1', image: require('../assets/images/bannerOne.png')},
  {id: '2', image: require('../assets/images/bannerOne.png')},
  {id: '3', image: require('../assets/images/bannerOne.png')},
  // Add more banner objects here
];

const {width} = Dimensions.get('window');

const HomeTab = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{height: 250, width: '100%'}}>
        <ImageBackground
          source={require('../assets/images/HeroBackground.png')}
          style={styles.HeroBackground}>
          {/*Header */}
          <View style={styles.header}>
            <View style={styles.headerIcon}>
              <Image
                source={require('../assets/images/headicon.png')}
                style={styles.icon}
              />
            </View>

            <View style={styles.headerTitle}>
              <Text style={styles.titleText}>Home</Text>
            </View>

            <View style={styles.headerActions}>
              <Image
                source={require('../assets/images/bellNotify.png')}
                style={styles.icon}
              />
              <Image
                source={require('../assets/images/userAccount.png')}
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.carouselContainer}>
            <FlatList
              data={banners}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              contentContainerStyle={styles.flatListContentContainer}
            />
          </View>
        </ImageBackground>
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
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIcon: {
    flex: 1,
  },
  headerTitle: {
    flex: 2,
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  carouselContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '75%',
    marginTop: 20,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0, // Ensure no horizontal margin
  },
  image: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9, // Adjust width as needed
    height: 200, // Adjust height for the banner
    resizeMode: 'contain',
  },
  flatListContentContainer: {
    paddingHorizontal: 0, // Ensure no extra padding
  },
});

export default HomeTab;
