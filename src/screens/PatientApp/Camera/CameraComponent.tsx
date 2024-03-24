import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Camera, CameraDevice} from 'react-native-vision-camera';
import {GalleryIcon, RotateCamera} from '../../../assets/svg';
import {AppHeader} from '../../../components';
import {styles} from './styles';

interface Props {
  cameraRef: React.RefObject<Camera>;
  onCapturePress: () => void;
  onToggleCamera: () => void;
  onImageFromGallery: () => void;
  device: CameraDevice | undefined;
}

export default function CameraComponent({
  cameraRef,
  onCapturePress,
  onToggleCamera,
  onImageFromGallery,
  device,
}: Props) {
  const renderHeader = () => (
    <View style={[styles.headerContainer]}>
      <AppHeader title={'Capture your wound'} />
    </View>
  );
  if (device == null) return <View />;
  return (
    <View style={styles.screen}>
      {renderHeader()}
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <View style={styles.cameraFunctionsContainer}>
        <TouchableOpacity
          onPress={onToggleCamera}
          style={{position: 'absolute', left: moderateScale(30)}}>
          <RotateCamera />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.captureBtnBorder}
          onPress={onCapturePress}>
          <View style={styles.captureBtn} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onImageFromGallery}
          style={{position: 'absolute', right: moderateScale(30)}}>
          <GalleryIcon height={moderateScale(35)} width={moderateScale(35)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
