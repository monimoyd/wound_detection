import React from 'react';
import {Image, View} from 'react-native';
import {AppButton, AppHeader} from '../../../components';
import {styles} from './styles';

interface Props {
  image: any;
  onRetakePress: () => void;
  onKeepPress: () => void;
}

export default function CameraPreviewComponent({
  image,
  onRetakePress,
  onKeepPress,
}: Props) {
  const renderHeader = () => (
    <View style={[styles.headerContainer]}>
      <AppHeader />
    </View>
  );
  return (
    <View style={styles.screen}>
      {renderHeader()}
      <Image source={{uri: image}} style={{width: '100%', height: '100%'}} />
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Retake'}
          style={styles.btnStyle}
          onPress={onRetakePress}
        />
        <AppButton
          title={'Keep'}
          style={styles.btnStyle}
          onPress={onKeepPress}
        />
      </View>
    </View>
  );
}
