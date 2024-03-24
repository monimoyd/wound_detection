import React, {useEffect} from 'react';
import {LocalStorageKeys} from '../../constant/LocalStorageKeys';
import {LocalStorage} from '../../utils';
import SplashComponent from './SplashComponent';

interface SplashControllerProps {
  navigation: any;
}

function SplashController({navigation}: SplashControllerProps) {
  useEffect(() => {
    console.log(
      '🚀 ~ setTimeout ~ LocalStorage.getString(LocalStorageKeys.USER_TYPE):',
      LocalStorage.getString(LocalStorageKeys.USER_TYPE),
    );
    setTimeout(() => {
      navigation.replace(
        !LocalStorage.getString(LocalStorageKeys.AUTH_TOKEN)
          ? 'onBoarding'
          : LocalStorage.getString(LocalStorageKeys.USER_TYPE) === 'PATIENT'
          ? 'Patient App'
          : 'Doctor App',
      );
    }, 2000);
  }, [navigation]);
  return <SplashComponent />;
}

export default SplashController;
