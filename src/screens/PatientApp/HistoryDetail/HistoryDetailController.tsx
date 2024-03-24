import React, {useEffect, useState} from 'react';
import {ApiCall} from '../../../config';
import HistoryDetailComponent from './HistoryDetailComponent';

interface Props {
  navigation: any;
  route: any;
}

export default function HistoryDetailController({navigation, route}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [reportHistoryDetails, setReportHistoryDetails] = useState();
  const report_id = route.params.params;

  const reportHistoryDetailApi = async () => {
    setIsLoading(true);
    const response = await ApiCall({
      endpoint: 'report/history/detail',
      method: 'POST',
      data: {
        report_id: report_id,
      },
    });
    setIsLoading(false);
    console.log(response.data.details);

    if (response?.status === 200) {
      setReportHistoryDetails(response.data.details);
    }
  };
  useEffect(() => {
    reportHistoryDetailApi();
  }, [report_id]);

  return <HistoryDetailComponent reportHistoryDetails={reportHistoryDetails} />;
}
