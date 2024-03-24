import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {AppButton, AppHeader, AppText} from '../../components';
import {styles} from './styles';
import {colors} from '../../utils/colors';

interface Props {
  selected: number;
  setSelected: (value: number) => void;
  onContinuePress: () => void;
}

export default function SignupSelectionComponent({
  selected,
  setSelected,
  onContinuePress,
}: Props) {
  return (
    <View style={styles.screen}>
      <AppHeader />

      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Hello, welcome</AppText>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelected(1)}
            style={[
              styles.card,
              {
                backgroundColor:
                  selected === 1 ? colors.secondary + '50' : colors.cardColor,
              },
            ]}>
            <Image
              source={require('../../assets/images/ImDoctor.png')}
              style={styles.cardImg}
              resizeMode="contain"
            />
            <AppText>I'm Doctor</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSelected(2)}
            style={[
              styles.card,
              {
                backgroundColor:
                  selected === 2 ? colors.secondary + '50' : colors.cardColor,
              },
            ]}>
            <Image
              source={require('../../assets/images/ImPatient.png')}
              style={styles.cardImg}
              resizeMode="contain"
            />
            <AppText>I'm Patient</AppText>
          </TouchableOpacity>
        </View>
        <AppButton title="Continue" onPress={onContinuePress} />
      </View>
    </View>
  );
}
