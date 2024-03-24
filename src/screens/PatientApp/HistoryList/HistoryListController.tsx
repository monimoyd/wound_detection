import React, {useEffect, useState} from 'react';
import HistoryListComponent from './HistoryListComponent';
import {ApiCall} from '../../../config';

interface Props {
  navigation: any;
}

export default function HistoryListController({navigation}: Props) {
  const [patientHistoryList, setPatientHistoryList] = useState([]);

  const patientListApi = async () => {
    const response = await ApiCall({
      endpoint: 'report/history/list',
      method: 'GET',
    });
    console.log(response.data.list);

    if (response?.status === 200) {
      setPatientHistoryList(response.data.list);
    }
  };

  useEffect(() => {
    patientListApi();
  }, []);

  return (
    <HistoryListComponent
      navigation={navigation}
      patientHistoryList={patientHistoryList}
    />
  );
}
