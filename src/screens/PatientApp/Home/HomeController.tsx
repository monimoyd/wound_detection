import React from 'react';
import HomeComponent from './HomeComponent';

interface Props {
  navigation: any;
}

export default function HomeController({navigation}: Props) {
  return (
    <HomeComponent
      onSelfAssessmentPress={() => navigation.navigate('Patient Camera')}
    />
  );
}
