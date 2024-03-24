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

  const renderTipCard = () => (
    <TouchableOpacity style={styles.tipCardContainer} activeOpacity={0.7}>
      <Image
        source={require('../../../assets/images/TipBulb.png')}
        style={styles.tipCardImage}
        resizeMode="contain"
      />
      <AppText style={styles.sectionTitle}>Open or closed Wound</AppText>
      <AppText style={styles.tipsDescText}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of it over 2000 years old.... more
      </AppText>
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
        <View style={styles.tipsContainer}>
          {renderTipCard()}
          {renderTipCard()}
          {renderTipCard()}
          {renderTipCard()}
          {renderTipCard()}
          {renderTipCard()}
        </View>
      </ScrollView>
    </View>
  );
}
