import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NotificationBell} from '../../../assets/svg';
import {AppText} from '../../../components';
import {styles} from './styles';
import {moderateVerticalScale} from 'react-native-size-matters';
import {LocalStorage} from '../../../utils';
import {LocalStorageKeys} from '../../../constant/LocalStorageKeys';

interface Props {
  onSelfAssessmentPress: () => void;
}

export default function HomeComponent({onSelfAssessmentPress}: Props) {
  const {top} = useSafeAreaInsets();
  const renderHeader = () => (
    <View
      style={[
        styles.headerContainer,
        {
          paddingTop: top ? top : moderateVerticalScale(20),
        },
      ]}>
      <Image
        source={{
          uri: 'https://avatar.iran.liara.run/public/4',
        }}
        style={styles.headerImage}
      />
      <View style={styles.headerTextContainer}>
        <AppText style={styles.headerGreetingText}>Hello,</AppText>
        <AppText style={styles.headerNameText}>
          {LocalStorage.getString(LocalStorageKeys.USER_NAME)}
        </AppText>
      </View>
      <NotificationBell />
    </View>
  );

  const renderDoctorCard = () => (
    <View style={styles.saShadowContainer}>
      <TouchableOpacity
        style={styles.saCard}
        activeOpacity={0.7}
        onPress={onSelfAssessmentPress}>
        <View style={styles.saCardContentContainer}>
          <AppText style={styles.saTitle}>Self Wound Assessment</AppText>
          <AppText style={styles.saDesc}>
            Check your wound condition regularly using ai to minimize the
            incidence of disease in the future.
          </AppText>
          <View style={styles.saCheckNowContainer}>
            <AppText>Check Now</AppText>
          </View>
        </View>
        <View style={styles.saImageContainer}>
          <Image
            source={require('../../../assets/images/Patient-Home-Doctor.png')}
            style={styles.saDoctorImg}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderTipCard = item => (
    <TouchableOpacity style={styles.tipCardContainer} activeOpacity={0.7}>
      <Image
        source={require('../../../assets/images/TipBulb.png')}
        style={styles.tipCardImage}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <AppText style={styles.sectionTitle}>{item.title}</AppText>
        <AppText style={styles.tipsDescText}>{item.desc}</AppText>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.screen}>
      {renderHeader()}
      <ScrollView
        style={styles.screenContentContainer}
        showsVerticalScrollIndicator={false}>
        {renderDoctorCard()}
        <View style={styles.sectionTitleContainer}>
          <AppText style={styles.sectionTitle}>Wound care tips</AppText>
          <AppText style={styles.seeAllText}>See all</AppText>
        </View>
        <View style={styles.tipsContainer}>{data.map(renderTipCard)}</View>
      </ScrollView>
    </View>
  );
}

const data = [
  {
    id: 1,
    title: 'Inspect the Wound',
    desc: 'Check the wound daily for signs of infection, such as redness, swelling, or pus3.',
  },
  {
    id: 2,
    title: 'Avoid Strain',
    desc: 'Limit activities that may stress the wound area to prevent reopening the incision',
  },
  {
    id: 3,
    title: 'Keep the wound clean and dry',
    desc: 'Avoid getting the wound wet. Clean around the wound with a soft cloth or gauze and sterile water.',
  },
  {
    id: 4,
    title: 'Hand Hygiene',
    desc: 'Wash your hands thoroughly before and after touching the wound or changing the dressing2.',
  },
];
