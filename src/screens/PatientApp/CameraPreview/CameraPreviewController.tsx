import React, {useState} from 'react';
import CameraPreviewComponent from './CameraPreviewComponent';
import {ApiCall} from '../../../config';

interface Props {
  navigation: any;
  route: any;
}

export default function CameraPreviewController({navigation, route}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const GetQuestionsApi = async () => {
    setIsLoading(true);
    const response = await ApiCall({
      endpoint: 'report/questions/list',
      method: 'GET',
    });
    setIsLoading(false);
    if (response?.status === 200) {
      navigation.navigate('Que Ans', {
        photo: [route.params?.photo],
        questions: response.data.questions,
        currentIndex: 0,
      });
    }
  };

  const onKeepPress = () => {
    GetQuestionsApi();
    // navigation.navigate('Que Ans', {photo: route.params?.photo?.path});
  };
  return (
    <CameraPreviewComponent
      image={route.params?.photo}
      onRetakePress={() => navigation.goBack()}
      onKeepPress={onKeepPress}
    />
  );
}
