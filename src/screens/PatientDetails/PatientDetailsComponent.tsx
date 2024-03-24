import React from 'react';
import {View} from 'react-native';
import {AppHeader, AppText, ReportPreview} from '../../components';
import {styles} from './styles';
import moment from 'moment';

interface PatientDetailsComponentProps {
  patientData: any;
  patientReportDetail: any;
}

function PatientDetailsComponent({
  patientData,
  patientReportDetail,
}: PatientDetailsComponentProps) {
  return (
    <View style={styles.container}>
      <AppHeader title={'Patient details'} />
      <ReportPreview
        image={patientReportDetail?.images}
        QA={patientReportDetail?.que_ans}
        infectionLevel={patientData?.last_infection_level}
        infectionProbability={patientReportDetail?.infection_confidence}>
        <View style={styles.patientCard}>
          <View style={styles.cardContentContainer}>
            <AppText style={styles.nameText}>{patientData.full_name}</AppText>
            <AppText style={styles.descText}>
              Gender: {patientData.gender}
            </AppText>
            <AppText style={styles.descText}>
              Surgery date:{' '}
              {moment(patientData.surgery_date).format('D-MMM-YYYY, h:mm A')}
            </AppText>
            <AppText style={styles.descText}>
              Report date:{' '}
              {moment(patientData.last_report_date).format(
                'D-MMM-YYYY, h:mm A',
              )}
            </AppText>
          </View>
        </View>
      </ReportPreview>
    </View>
  );
}

export default PatientDetailsComponent;
