import React from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {
  FilterIcon,
  NotificationBellWhite,
  SearchIcon,
} from '../../../assets/svg';
import {AppText} from '../../../components';
import {styles} from './styles';
import moment from 'moment';
import {LocalStorage} from '../../../utils';
import {LocalStorageKeys} from '../../../constant/LocalStorageKeys';

interface Props {
  patientList: any[];
  navigation: any;
  refreshing: boolean;
  patientListApi: (value: boolean) => void;
  filterKeyword: string;
  setFilterKeyword: (value: string) => void;
}

const infectionColor = {
  No: '#16A866',
  Low: '#DFDC01',
  Medium: '#DFDC01',
  Moderate: '#F9B234',
  Severe: '#F9B234',
  Critical: '#BE1623',
};
const infectionTextColor = {
  No: 'white',
  Low: 'black',
  Medium: 'black',
  Moderate: 'black',
  Severe: 'black',
  Critical: 'white',
};

export default function HomeComponent({
  navigation,
  patientList,
  refreshing,
  patientListApi,
  filterKeyword,
  setFilterKeyword,
}: Props) {
  const {top} = useSafeAreaInsets();
  const renderHeader = () => (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: top ? top : moderateVerticalScale(20),
        },
      ]}>
      <View style={styles.headerProfileContainer}>
        <Image
          source={{
            uri: 'https://avatar.iran.liara.run/public/4',
          }}
          style={styles.headerImage}
        />
        <View style={styles.headerTextContainer}>
          <AppText style={styles.headerGreetingText}>Hello, Welcome</AppText>
          <AppText style={styles.headerNameText}>
            {LocalStorage.getString(LocalStorageKeys.USER_NAME)}
          </AppText>
        </View>
        <NotificationBellWhite />
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search . . ."
          placeholderTextColor={'white'}
          value={filterKeyword}
          onChangeText={setFilterKeyword}
        />
        <FilterIcon />
      </View>
    </View>
  );

  const renderPatientCards = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.patientCard}
      onPress={() => navigation.navigate('Patient Details', {params: item})}>
      <View style={styles.cardContentContainer}>
        <AppText style={styles.nameText}>{item.full_name}</AppText>
        <AppText style={styles.descText}>Gender: {item.gender}</AppText>
        <AppText style={styles.descText}>
          Surgery date:{'\n'}
          {moment(item.surgery_date).format('D-MMM-YYYY, h:mm A')}
        </AppText>
        <AppText style={styles.descText}>
          Report date:{'\n'}
          {item?.last_report_date
            ? moment(item.last_report_date).format('D-MMM-YYYY, h:mm A')
            : '-'}
        </AppText>
      </View>
      {item?.last_infection_level ? (
        <View
          style={[
            styles.infectionContainer,
            {
              backgroundColor:
                infectionColor[item.last_infection_level] ?? 'black',
            },
          ]}>
          <AppText
            style={[
              styles.infectionText,
              {color: infectionTextColor[item.last_infection_level]},
            ]}>
            {item.last_infection_level} infection
          </AppText>
        </View>
      ) : null}
    </TouchableOpacity>
  );
  return (
    <View style={styles.screen}>
      {renderHeader()}

      <AppText style={styles.sectionTitle}>Patient List</AppText>
      <FlatList
        data={patientList?.filter(filterItem =>
          filterItem?.full_name
            ?.toLowerCase()
            .includes(filterKeyword?.trim()?.toLowerCase()),
        )}
        extraData={filterKeyword}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.user_id}
        contentContainerStyle={{
          paddingHorizontal: moderateScale(15),
        }}
        renderItem={renderPatientCards}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => patientListApi(true)} // Call fetchData when pull-to-refresh is triggered
          />
        }
      />
    </View>
  );
}
