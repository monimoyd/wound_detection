import React, {useState} from 'react';
import SubmitPreviewComponent from './SubmitPreviewComponent';
import {ApiCall} from '../../../config';

interface Props {
  navigation: any;
  route: any;
}

export default function SubmitPreviewController({navigation, route}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const callSubmitReportApi = async () => {
    const image = route.params.photo[0];
    const splitArr = image.split('/');
    const imageName = splitArr[splitArr.length - 1];
    setIsLoading(true);
    const result = await fetch(image);
    const imageData: any = await result.blob();

    const data = new FormData();
    data.append('image', {
      name: imageName,
      type: imageData._data.type,
      uri: image,
    });
    data.append('answers', JSON.stringify(route.params.questions));
    const response = await ApiCall({
      endpoint: 'report/submit',
      method: 'POST',
      data: data,
      extraHeaders: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setIsLoading(false);
    if (response?.status === 200) {
      console.log('🚀 ~ callSubmitReportApi ~ response:', response.data);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Patient App',
          },
          {
            name: 'Submit Report',
            params: {
              ...route.params,
              infectionLevel: response.data.result.approved_infection_level,
              infection_confidence: response.data.result.infection_confidence,
            },
          },
        ],
      });
    }
  };
  return (
    <SubmitPreviewComponent
      isLoading={isLoading}
      questionAnswerData={route.params.questions}
      image={route.params.photo}
      onBackPress={() => navigation.goBack()}
      onSubmitPress={callSubmitReportApi}
    />
  );
}
