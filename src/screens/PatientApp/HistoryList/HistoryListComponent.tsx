import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {AppHeader, AppText} from '../../../components';
import {styles} from './styles';
import moment from 'moment';

interface Props {
  navigation: any;
  patientHistoryList: any;
}

const infectionTextColor = {
  No: '#16A866',
  Low: '#DFDC01',
  Medium: '#DFDC01',
  Moderate: '#F9B234',
  Severe: '#F9B234',
  Critical: '#BE1623',
};

export default function HistoryListComponent({
  navigation,
  patientHistoryList,
}: Props) {
  const renderHistoryCard = item => (
    <TouchableOpacity
      style={styles.reportCard}
      onPress={() =>
        navigation.navigate('History Detail', {
          params: item.report_id,
        })
      }>
      <Image
        source={require('../../../assets/images/ReportClipboard.png')}
        style={{width: moderateScale(60), height: moderateScale(60)}}
      />
      <View style={styles.contentContainer}>
        <AppText style={styles.reportText}>Assessment Date</AppText>
        <AppText style={styles.reportText}>
          {moment(item.created_at).format('D-MMM-YYYY, h:mm A')}
        </AppText>
        <AppText
          style={[
            styles.infectionText,
            {
              // color: infectionTextColor[item.approved_infection_level],
            },
          ]}>
          {item.approved_infection_level} Infection
        </AppText>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.screen}>
      <AppHeader title={'History'} />
      {patientHistoryList.length > 0 ? (
        <ScrollView style={styles.screenContentContainer}>
          {patientHistoryList.map(renderHistoryCard)}
        </ScrollView>
      ) : (
        <View style={styles.errorView}>
          <AppText style={styles.errorText}>History Not Found !!!</AppText>
        </View>
      )}
    </View>
  );
}
