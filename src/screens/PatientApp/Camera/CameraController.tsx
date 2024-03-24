import React, {useEffect, useRef, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  Camera,
  CameraPosition,
  useCameraDevice,
} from 'react-native-vision-camera';
import CameraComponent from './CameraComponent';
import {PermissionsAndroid, Platform} from 'react-native';

interface Props {
  navigation: any;
}

export default function CameraController({navigation}: Props) {
  const [deviceCamera, setDeviceCamera] = useState<CameraPosition>('back');
  const device = useCameraDevice(deviceCamera);
  const camera = useRef<Camera>(null);
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    await Camera.requestCameraPermission();
  };
  const onToggleCamera = () => {
    setDeviceCamera(prevState => (prevState === 'back' ? 'front' : 'back'));
  };
  const onCapturePress = async () => {
    const photo = await camera.current?.takePhoto();
    navigation.navigate('Camera Preview', {photo: 'file://' + photo?.path});
  };
  const onImageFromGallery = async () => {
    if (Platform.OS === 'android') {
      const OsVer = Platform.constants['Release'];
      console.log('🚀 ~ onImageFromGallery ~ OsVer:', OsVer);
      try {
        const granted = await PermissionsAndroid.request(
          parseInt(OsVer) >= 13
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Infect Safe App Photos Permission',
            message:
              'Infect Safe App needs access to your Library ' +
              'so we can take your wound pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const result = await launchImageLibrary({
            mediaType: 'photo',
          });
          navigation.navigate('Camera Preview', {
            photo: result?.assets![0]?.uri,
          });
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      navigation.navigate('Camera Preview', {
        photo: result?.assets![0]?.uri,
      });
    }
  };
  return (
    <CameraComponent
      cameraRef={camera}
      onCapturePress={onCapturePress}
      device={device}
      onToggleCamera={onToggleCamera}
      onImageFromGallery={onImageFromGallery}
    />
  );
}
