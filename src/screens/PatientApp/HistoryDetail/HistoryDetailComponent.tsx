import React from 'react';
import {View} from 'react-native';
import {AppHeader, ReportPreview} from '../../../components';
import {styles} from './styles';

interface Props {
  reportHistoryDetails: any;
}

export default function HistoryDetailComponent({reportHistoryDetails}: Props) {
  return (
    <View style={styles.screen}>
      <AppHeader title={'History Details'} />
      <ReportPreview
        image={reportHistoryDetails?.images}
        QA={reportHistoryDetails?.que_ans}
        infectionLevel={reportHistoryDetails?.approved_infection_level}
        infectionProbability={reportHistoryDetails?.infection_confidence}
      />
    </View>
  );
}

const data = [
  {
    answer: 'No',
    created_at: '2024-03-20T21:38:10.065Z',
    question:
      'Are there any signs of inflammation, such as redness, swelling, or increased temperature around the wound?',
    question_id: 'd7880002-13ca-46f3-b0da-bee27f03c731',
    question_type: 'YesNo',
    updated_at: '2024-03-20T21:38:10.065Z',
  },
  {
    answer: 'Yes',
    created_at: '2024-03-20T21:38:28.086Z',
    question:
      'Have there been any issues with wound dressing changes or other care procedures?',
    question_id: '6f5d9121-652a-4807-b755-4e3fcf18ca8a',
    question_type: 'YesNo',
    updated_at: '2024-03-20T21:38:28.086Z',
  },
  {
    answer: 'No',
    created_at: '2024-03-20T21:38:37.944Z',
    question: 'Is there any drainage or discharge from the wound?',
    question_id: '41d05adb-cd4b-4ef8-b9d8-be6357757fb1',
    question_type: 'YesNo',
    updated_at: '2024-03-20T21:38:37.944Z',
  },
];
