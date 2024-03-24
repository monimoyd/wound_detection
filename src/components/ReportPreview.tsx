import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {colors} from '../utils/colors';
import AppText from './AppText';
import {MeterHand, MeterScale} from '../assets/svg';

interface Props {
  image: any;
  children?: React.ReactNode | undefined;
  QA?: any[];
  infectionLevel?:
    | 'No'
    | 'Low'
    | 'Medium'
    | 'Moderate'
    | 'Severe'
    | 'Critical'
    | null
    | undefined;
  infectionProbability?: any;
}

const infectionColor = {
  No: '#16A866',
  Low: '#DFDC01',
  Medium: '#DFDC01',
  Moderate: '#F9B234',
  Severe: '#F9B234',
  Critical: '#BE1623',
};

export default function ReportPreview({
  image,
  children,
  QA,
  infectionLevel,
  infectionProbability,
}: Props) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('🚀 ~ useEffect ~ infectionProbability:', infectionProbability);
    if (infectionProbability) {
      animateRotation(parseFloat(infectionProbability));
    }
  }, [infectionProbability]);

  const animateRotation = (value: number) => {
    Animated.timing(rotation, {
      toValue: value,
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start();
  };

  const interpolatedRotation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const renderCards = (item: any) => (
    <View style={styles.qaCard} key={item.question_id}>
      <AppText style={styles.question}>{item.question}</AppText>
      <View style={styles.answerContainer}>
        <AppText style={styles.answer}>{item.answer}</AppText>
      </View>
    </View>
  );
  return (
    <ScrollView
      style={styles.screenContentContainer}
      showsVerticalScrollIndicator={false}>
      {infectionLevel ? (
        <>
          {children}
          {['High', 'Medium'].includes(infectionLevel) ? (
            <View style={styles.reportCard}>
              <Image
                source={require('../assets/images/ReportClipboard.png')}
                style={{width: moderateScale(45), height: moderateScale(45)}}
              />
              <AppText style={styles.reportText}>
                A mail has been sent to your doctor with this report.
              </AppText>
            </View>
          ) : null}
          <View>
            <View
              style={{
                width: '100%',
                height: Dimensions.get('screen').width / 2,
                alignItems: 'center',
                marginTop: moderateVerticalScale(15),
              }}>
              <MeterScale
                height={Dimensions.get('screen').width / 2.5}
                width={'100%'}
              />
              <Animated.View
                style={{
                  width: Dimensions.get('screen').width / 3.5,
                  position: 'absolute',
                  bottom: -moderateVerticalScale(30),
                  transform: [
                    {rotateZ: interpolatedRotation},
                    {translateX: -moderateVerticalScale(38)},
                  ],
                }}>
                <MeterHand
                  height={Dimensions.get('screen').width / 2.5}
                  width={'100%'}
                />
              </Animated.View>
            </View>
            <AppText
              style={[
                styles.infectionTitle,
                {color: infectionColor[infectionLevel] ?? 'black'},
              ]}>
              {infectionLevel} Infection
            </AppText>
            <AppText style={styles.infectionDescription}>
              Possible chances of {infectionLevel} infection
            </AppText>
          </View>
        </>
      ) : null}
      <AppText style={styles.title}>Wounds image</AppText>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{uri: image[0]}}
            style={styles.img}
            resizeMode="stretch"
          />
        </View>
      ) : null}

      <AppText style={styles.title}>Q&A</AppText>
      {QA?.map(renderCards)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingHorizontal: moderateScale(15),
  },
  imageContainer: {
    marginTop: moderateVerticalScale(15),
    height: Dimensions.get('screen').width / 1.4,
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginTop: moderateVerticalScale(15),
  },
  qaCard: {
    width: '100%',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(15),
    backgroundColor: '#F7F8F9',
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(15),
  },
  answerContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 3,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateVerticalScale(5),
    alignSelf: 'flex-end',
    marginTop: moderateVerticalScale(10),
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(20),
  },
  question: {
    color: 'black',
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  answer: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(14),
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(15),
  },
  btn: {
    width: '48%',
    paddingVertical: moderateVerticalScale(10),
  },
  reportCard: {
    flexDirection: 'row',
    backgroundColor: '#F7F8F9',
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    alignItems: 'center',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.secondary,
    marginTop: moderateVerticalScale(15),
  },
  reportText: {
    flex: 1,
    marginLeft: moderateScale(7),
    textAlign: 'center',
    color: 'black',
  },
  meterImg: {
    width: '85%',
    height: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
  },
  infectionTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: '#BE1623',
  },
  infectionDescription: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(14),
    color: 'black',
  },
});
