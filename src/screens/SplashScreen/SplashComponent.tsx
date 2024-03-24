import React from 'react';
import {Image, View} from 'react-native';
import {AppText} from '../../components';
import {styles} from './style';
import {moderateScale} from 'react-native-size-matters';

function SplashComponent() {
  return (
    <View style={styles.container}>
      {/* <AppText style={styles.text}>Infect Safe</AppText> */}
      <View
        style={{
          paddingHorizontal: moderateScale(20),
          flex: 1,
        }}>
        <Image
          source={require('../../assets/images/SplashLogo.png')}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
    </View>
  );
}

export default SplashComponent;
