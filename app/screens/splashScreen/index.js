import React from 'react';
import {View, Image, useWindowDimensions, StatusBar} from 'react-native';
import {colors} from '../../constant';
import * as Animatable from 'react-native-animatable';

function SplashScreen() {
  const {width} = useWindowDimensions();

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
      }}>
      <Animatable.View animation="fadeIn" easing="linear" iterationCount={1}>
        <Image
          source={require('../../assets/suzlonlogo.png')}
          alt={'Splash'}
          resizeMode={'contain'}
          style={{height: width * 0.75, width: width * 0.75}}
        />
      </Animatable.View>
    </View>
  );
}

export default React.memo(SplashScreen);
