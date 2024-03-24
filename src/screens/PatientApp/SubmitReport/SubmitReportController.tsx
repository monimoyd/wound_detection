import React from 'react';
import SubmitReportComponent from './SubmitReportComponent';

interface Props {
  navigation: any;
  route: any;
}

export default function SubmitReportController({navigation, route}: Props) {
  return (
    <SubmitReportComponent
      image={route.params.photo}
      infection_confidence={route.params?.infection_confidence}
      screenData={route.params}
    />
  );
}
