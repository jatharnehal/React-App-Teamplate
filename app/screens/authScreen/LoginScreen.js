import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import background from '../../assets/background.png';
import logo from '../../assets/logo.png';
import {ToastUtils} from '../../utils/ToastUtils';
import CircleProgressIndicator from '../../components/CircleProgressIndicator';
import {useAuth} from '../../context/authContext';
import {colors, BASE_URL, ENDPOINT} from '../../constant';
import {fetchPostData} from '../../services/Api';

const LoginScreen = () => {
  const [domainID, setDomainID] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [loading, setLoading] = useState(false);
  const {setToken, setUser} = useAuth();

  const validateInputs = (domainID, password) => {
    if (!domainID) {
      ToastUtils.toastMsg('error', "Domain ID can't be empty.");
      return false;
    }
    if (!password) {
      ToastUtils.toastMsg('error', "Password can't be empty.");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs(domainID, password)) {
      return;
    }
    setLoading(true);

    const requestBody = {
      username: domainID,
      password: password,
    };

    try {
      const url = BASE_URL + ENDPOINT.Login;

      const responseData = await fetchPostData(url, requestBody);
      if (responseData.token) {
        setToken(responseData.token);
      } else {
        ToastUtils.toastMsg('error', responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={background}
      style={styles.backgroundImage}
      resizeMode="cover">
      <KeyboardAvoidingView
        style={{flex: 1, minHeight: Dimensions.get('screen').height}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.overlayBackground} />
            <View style={styles.content}>
              <Image style={styles.titleLogo} source={logo} />
              <Text style={styles.labelText}>Domain ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Domain Id"
                placeholderTextColor="white"
                value={domainID}
                maxLength={10}
                onChangeText={text => setDomainID(text)}
              />
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="white"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <CircleProgressIndicator isVisible={loading} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    width: '88%',
    height: 404,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    paddingTop: 38,
    paddingRight: 18,
    paddingBottom: 38,
    paddingLeft: 18,
  },
  overlayBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  titleLogo: {
    marginBottom: 38,
    alignSelf: 'center',
  },
  input: {
    height: 44,
    borderColor: colors.gray,
    borderWidth: 2,
    paddingLeft: 8,
    padding: 12,
    color: 'white',
    marginBottom: 24,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },
  loginButton: {
    backgroundColor: colors.primaryColor,
    padding: 12,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },
  loginText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  },
  line: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginHorizontal: '10%',
    marginBottom: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust the opacity and color as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#BDBDBD',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 16,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
});

export default LoginScreen;
