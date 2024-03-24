import React, {useEffect, useState} from 'react';
import PatientDetailsComponent from './PatientDetailsComponent';
import {ApiCall} from '../../config';

interface PatientDetailsControllerProps {
  route: any;
}

function PatientDetailsController({route}: PatientDetailsControllerProps) {
  const patientData = route?.params?.params;
  console.log('🚀 ~ PatientDetailsController ~ patientData:', patientData);
  const [patientReportDetail, setPatientReportDetail] = useState();

  useEffect(() => {
    patientReportDetailApi();
  }, []);

  const patientReportDetailApi = async () => {
    const response = await ApiCall({
      endpoint: 'doctor/patient/report/details',
      method: 'POST',
      data: {
        report_id: patientData.last_report_id,
      },
    });
    if (response?.status === 200) {
      setPatientReportDetail(response.data.details);
    }
  };

  return (
    <PatientDetailsComponent
      patientData={patientData}
      patientReportDetail={patientReportDetail}
    />
  );
}

export default PatientDetailsController;
