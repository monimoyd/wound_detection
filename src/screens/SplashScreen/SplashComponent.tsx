import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../components';
import {styles} from './style';

function SplashComponent() {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Infect Safe</AppText>
    </View>
  );
}

export default SplashComponent;
