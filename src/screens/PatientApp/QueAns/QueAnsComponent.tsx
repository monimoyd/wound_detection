import React from 'react';
import {View} from 'react-native';
import {AppButton, AppHeader, AppText} from '../../../components';
import {styles} from './styles';

interface Props {
  question: string;
  totalQuestions: number;
  currentQuestion: number;
  onYesPress: () => void;
  onNoPress: () => void;
}

export default function QueAnsComponent({
  question,
  totalQuestions,
  currentQuestion,
  onYesPress,
  onNoPress,
}: Props) {
  const renderProgressBar = () => (
    <View style={styles.progressContainer}>
      <View style={styles.progressCountContainer}>
        <AppText>
          {currentQuestion} of {totalQuestions}
        </AppText>
      </View>
      <View style={styles.progressBarBorder}>
        <View
          style={[
            styles.progressBar,
            {width: `${(100 / totalQuestions) * currentQuestion}%`},
          ]}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.screen}>
      <AppHeader title={'Assess Symptoms'} />
      {renderProgressBar()}
      <View style={styles.queAnsContainer}>
        <AppText style={styles.question}>{question}</AppText>
        <View style={styles.btnContainer}>
          <AppButton title="Yes" style={styles.btn} onPress={onYesPress} />
          <AppButton title="No" style={styles.btn} onPress={onNoPress} />
        </View>
      </View>
    </View>
  );
}
