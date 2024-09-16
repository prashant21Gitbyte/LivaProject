import react from 'react';
import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';

const HomeTab = () => {
  return (
    <View style={{height: 250, width: 500}}>
      {/*Header */}

      <ImageBackground
        source={require('../assets/images/HeroBackground.png')}
        style={styles.HeroBackground}
      />

      <View style={{}}>
        <View>
          <Text>hello</Text>
        </View>
        <View>
          <Text>hello</Text>
        </View>
        <View>
          <Text>hello</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeroBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeTab;
