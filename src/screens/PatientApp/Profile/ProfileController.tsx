import React from 'react';
import ProfileComponent from './ProfileComponent';
import {Alert} from 'react-native';
import {LocalStorage} from '../../../utils';

interface ProfileControllerProps {
  navigation: any;
}

function ProfileController({navigation}: ProfileControllerProps) {
  function LogoutPopUp() {
    Alert.alert('LOG OUT', 'Are you sure want to Logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          LocalStorage.clearAll();
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        },
      },
    ]);
  }
  return <ProfileComponent LogoutPopUp={LogoutPopUp} />;
}

export default ProfileController;
