import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = () => {
    navigation.navigate('BottomTabs');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Reset your password here.');
  };

  const handleSocialLogin = platform => {
    Alert.alert('Social Login', `Login with ${platform}`);
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 0, right: 0}}>
        <Image
          source={require('../assets/images/lowerLeafLogin.png')}
          style={{width: 200, height: 200}}
        />
      </View>
      <Text style={styles.signInText}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? (
            <IonIcons name="eye-off-outline" size={24} style={styles.icon} />
          ) : (
            <IonIcons name="eye-outline" size={24} style={styles.icon} />
          )}
          {/*<Image
            source={
              passwordVisible
                ? require('../assets/icons/eye-open.png')
                : require('../assets/icons/eye-closed.png')
            }
            style={styles.icon}
          />*/}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center', marginBottom: 20}}>
        <View
          style={{
            width: 290,
            height: 0.5,
            backgroundColor: 'black',
            position: 'absolute',
            top: 10,
          }}></View>
        <Text style={{backgroundColor: 'white', textAlign: 'center'}}>
          Or Sign In With
        </Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity onPress={() => handleSocialLogin('Google')}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialLogin('Facebook')}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSocialLogin('Apple')}>
          <Image
            source={require('../assets/images/apple.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  signInText: {
    fontSize: 29,
    color: '#2D949F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  forgotPassword: {
    color: '#666666',
    textAlign: 'right',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#2D949F',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default SignUpScreen;
