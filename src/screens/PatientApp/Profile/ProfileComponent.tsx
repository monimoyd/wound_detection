import React from 'react';
import {View} from 'react-native';
import {AppButton} from '../../../components';
import {styles} from './style';

interface ProfileComponentProps {
  LogoutPopUp: (value?: any) => void;
}

function ProfileComponent({LogoutPopUp}: ProfileComponentProps) {
  return (
    <View style={styles.buttonView}>
      <AppButton title={'Log Out'} onPress={LogoutPopUp} />
    </View>
  );
}

export default ProfileComponent;
