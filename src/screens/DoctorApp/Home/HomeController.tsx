import React, {useEffect, useState} from 'react';
import {ApiCall} from '../../../config';
import HomeComponent from './HomeComponent';

interface Props {
  navigation: any;
}

export default function HomeController({navigation}: Props) {
  const [patientList, setPatientList] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const patientListApi = async (isRefreshing?: Boolean) => {
    isRefreshing && setRefreshing(true);
    const response = await ApiCall({
      endpoint: 'doctor/patient/list',
      method: 'GET',
    });
    isRefreshing && setRefreshing(false);
    if (response?.status === 200) {
      setPatientList(response.data.list);
    }
  };

  useEffect(() => {
    patientListApi();
  }, []);

  return (
    <HomeComponent
      patientList={patientList}
      navigation={navigation}
      refreshing={refreshing}
      filterKeyword={filterKeyword}
      setFilterKeyword={setFilterKeyword}
      patientListApi={patientListApi}
    />
  );
}
