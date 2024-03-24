import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import {AppText} from '../../components';
import AppButton from '../../components/AppButton';
import {styles} from './styles';

interface Props {
  flatListRef: any;
  viewabilityConfigCallbackPairs: any;
  currentIndex: number;
  onGetStartedPress: () => void;
}

export default function OnBoardingComponent({
  flatListRef,
  viewabilityConfigCallbackPairs,
  currentIndex,
  onGetStartedPress,
}: Props) {
  const renderPage = ({item}: any) => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(20),
        width: Dimensions.get('screen').width,
      }}>
      <AppText style={styles.title}>{item.title}</AppText>
      <AppText style={styles.descriptionText}>{item.desc}</AppText>
    </View>
  );
  return (
    <View style={styles.screen}>
      <LinearGradient colors={['#FFFFFF', '#5BC3EB']} style={styles.gradient}>
        <View style={{height: '50%'}} />
        <FlatList
          ref={flatListRef}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderPage}
          decelerationRate={'fast'}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
        <View style={{flex: 1}}>
          <View style={styles.dotsContainer}>
            <View style={currentIndex === 0 ? styles.activeDot : styles.dot} />
            <View style={currentIndex === 1 ? styles.activeDot : styles.dot} />
            <View style={currentIndex === 2 ? styles.activeDot : styles.dot} />
          </View>
        </View>
        <AppButton
          title={'Get Started'}
          style={styles.button}
          onPress={onGetStartedPress}
        />
      </LinearGradient>
    </View>
  );
}

const data = [
  {
    id: 1,
    title: 'Welcome to\nInfectSafe',
    desc: "Welcome to WoundWatch, your personal companion for post-surgical wound care. Our app is designed to assist you in monitoring and managing your surgical wound with ease and precision. With WoundWatch, you'll have access to valuable tools and resources to ensure a smooth recovery journey. Let's get started!",
  },
  {
    id: 2,
    title: 'Capture & Track\nYour Wound',
    desc: `Capture and track the progress of your surgical wound effortlessly with WoundWatch. Use your smartphone camera to take clear photos of your wound at regular intervals. Our intuitive interface allows you to store and organize these images securely, providing a visual timeline of your recovery process. Tracking your wound's healing progress has never been simpler!`,
  },
  {
    id: 3,
    title: 'Stay Informed &\nConnected',
    desc: `Stay informed and connected throughout your recovery journey with WoundWatch. Receive timely reminders for wound care tasks and follow-up appointments to ensure optimal healing. Explore educational resources and tips for post-surgical care tailored to your specific needs. With WoundWatch, you're never alone on the path to recovery. Let's embark on this journey together!`,
  },
];
