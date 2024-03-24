import React from 'react';
import QueAnsComponent from './QueAnsComponent';

interface Props {
  navigation: any;
  route: any;
}

export default function QueAnsController({navigation, route}: Props) {
  return (
    <QueAnsComponent
      question={route.params.questions[route.params.currentIndex].question}
      totalQuestions={route.params.questions.length}
      currentQuestion={route.params.currentIndex + 1}
      onYesPress={() =>
        navigation.push(
          route.params.currentIndex + 1 === route.params.questions.length
            ? 'Submit Preview'
            : 'Que Ans',
          {
            ...route.params,
            questions: route.params.questions.map(
              (question: any, index: number) => ({
                ...question,
                answer:
                  index === route.params.currentIndex
                    ? 'Yes'
                    : question?.answer,
              }),
            ),
            currentIndex: route.params.currentIndex + 1,
          },
        )
      }
      onNoPress={() =>
        navigation.push(
          route.params.currentIndex + 1 === route.params.questions.length
            ? 'Submit Preview'
            : 'Que Ans',
          {
            ...route.params,
            questions: route.params.questions.map(
              (question: any, index: number) => ({
                ...question,
                answer:
                  index === route.params.currentIndex ? 'No' : question?.answer,
              }),
            ),
            currentIndex: route.params.currentIndex + 1,
          },
        )
      }
    />
  );
}
