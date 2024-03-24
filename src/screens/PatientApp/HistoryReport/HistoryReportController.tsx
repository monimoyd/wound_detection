import React from 'react';
import HistoryReportComponent from './HistoryReportComponent';

interface Props {
  navigation: any;
  route: any;
}

export default function HistoryReportController({navigation, route}: Props) {
  return <HistoryReportComponent image={route.params.photo} />;
}
