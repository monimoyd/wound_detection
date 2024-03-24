import React from 'react';
import {View} from 'react-native';
import {AppHeader, ReportPreview} from '../../../components';
import {styles} from './styles';

interface Props {
  image: string;
  screenData: any;
  infection_confidence?: any;
}

export default function SubmitReportComponent({
  image,
  screenData,
  infection_confidence,
}: Props) {
  return (
    <View style={styles.screen}>
      <AppHeader title={'Report'} />
      <ReportPreview
        image={image}
        QA={screenData.questions}
        infectionLevel={screenData.infectionLevel}
        infectionProbability={infection_confidence}
      />
    </View>
  );
}

const data = [
  {
    que_id: 1,
    que: 'Are there any signs of inflammation, such as redness, swelling, or increased temperature around the wound?',
    ans: 'Yes',
  },
  {
    que_id: 2,
    que: 'Are there any issues with wound dressing changes or other care procedures?',
    ans: 'Yes',
  },
  {
    que_id: 3,
    que: 'Is there any puss or discharge from the wound?',
    ans: 'Yes',
  },
];
