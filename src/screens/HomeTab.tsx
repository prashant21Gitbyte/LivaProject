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

const banners = [
  {id: '1', image: require('../assets/images/bannerOne.png')},
  {id: '2', image: require('../assets/images/bannerOne.png')},
  {id: '3', image: require('../assets/images/bannerOne.png')},
  // Add more banner objects here
];

const recordDetails = {
  recordCount: 966,
  countBySource: {
    field: 5,
    businessDevelopment: 5,
    referral: 5,
  },
};
const {width} = Dimensions.get('window');

const HomeTab = () => {
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
  );

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

          <View
            style={{
              //backgroundColor: 'white',
              width: '100%',
              height: '75%',
              marginTop: 20,
            }}>
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

      <View
        style={{
          backgroundColor: '#F6F6F6',
          flex: 1,
          marginTop: -15,
          borderRadius: 20,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}>
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/Inventory.png')}
                style={{width: 45, height: 45}}
              />
              <Text style={{textAlign: 'center', color: '666666'}}>
                Inventory
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/Compare.png')}
                style={{width: 45, height: 45}}
              />
              <Text style={{textAlign: 'center', color: '666666'}}>
                Compare
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/Finance.png')}
                style={{width: 45, height: 45}}
              />
              <Text style={{textAlign: 'center', color: '666666'}}>
                Finance
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/Opportunity.png')}
                style={{width: 45, height: 45}}
              />
              <Text style={{textAlign: 'center', color: '666666'}}>
                Opportunity
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            margin: 20,
            gap: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              backgroundColor: '#34A853',
              color: 'white',
              alignSelf: 'flex-start',
              paddingHorizontal: 5,
              paddingVertical: 2,
              borderRadius: 5,
            }}>
            Pinned Report
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 17}}>
            Cases by Origin and Open Status
          </Text>
          <View>
            <Text>Record Count</Text>
            <Text style={{fontSize: 22}}>{recordDetails.recordCount}</Text>
          </View>
          <View style={styles.countBySource}>
            <View style={{width: '50%', gap: 6}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Lead Source
              </Text>
              <Text style={{}}>Field</Text>
              <Text style={{}}>Business Development</Text>
              <Text style={{}}>Referral</Text>
            </View>
            <View style={{gap: 6}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Record Count
              </Text>
              <Text style={{}}>{recordDetails.countBySource.field}</Text>
              <Text style={{}}>
                {recordDetails.countBySource.businessDevelopment}
              </Text>
              <Text style={{}}>{recordDetails.countBySource.referral}</Text>
            </View>
          </View>
        </View>
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

export default HomeTab;
