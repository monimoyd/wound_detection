import React from 'react';
import {View} from 'react-native';
import {AppButton, AppHeader, ReportPreview} from '../../../components';
import {styles} from './styles';

interface Props {
  isLoading: boolean;
  image: string;
  questionAnswerData: any[];
  onBackPress: () => void;
  onSubmitPress: () => void;
}

export default function SubmitPreviewComponent({
  isLoading,
  image,
  questionAnswerData,
  onBackPress,
  onSubmitPress,
}: Props) {
  console.log('🚀 ~ questionAnswerData:', image);
  return (
    <View style={styles.screen}>
      <AppHeader title={'Preview'} />
      <ReportPreview image={image} QA={questionAnswerData} />
      <View style={styles.btnContainer}>
        <AppButton style={styles.btn} title="Back" onPress={onBackPress} />
        <AppButton
          style={styles.btn}
          title="Submit"
          onPress={onSubmitPress}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
