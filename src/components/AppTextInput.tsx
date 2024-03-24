import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {ErrorIcon} from '../assets/svg';
import {colors} from '../utils';

interface Props {
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  countryCode?: string | undefined;
  onCountryCodeChange?: ((text: string) => void) | undefined;
  placeholder?: string | undefined;
  secureTextEntry?: any;
  keyboardType?: any;
  inputMode?: any;
  maxLength?: any;
  onPress?: any;
  sufixSvg?: any;
  error?: any;
}

const AppTextInput = ({
  placeholder,
  value,
  onChangeText,
  countryCode,
  onCountryCodeChange,
  secureTextEntry,
  keyboardType,
  inputMode,
  maxLength,
  onPress,
  sufixSvg,
  error,
}: Props) => {
  return (
    <>
      <View style={styles.container}>
        {keyboardType === 'phone-pad' ? (
          <TextInput
            autoCapitalize={'none'}
            style={styles.countryCodeInput}
            value={countryCode}
            onChangeText={onCountryCodeChange}
            editable={true}
            placeholder={'+49'}
            placeholderTextColor={colors.blue}
            blurOnSubmit
            secureTextEntry={secureTextEntry}
            keyboardType={'phone-pad'}
            underlineColorAndroid="transparent"
            cursorColor={colors.blue}
            inputMode={inputMode ? inputMode : null}
            maxLength={4}
          />
        ) : null}
        <TextInput
          autoCapitalize={'none'}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          editable={true}
          placeholder={placeholder}
          placeholderTextColor={colors.blue}
          blurOnSubmit
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          cursorColor={colors.blue}
          inputMode={inputMode ? inputMode : null}
          maxLength={maxLength ? maxLength : null}
        />
        <TouchableOpacity onPress={onPress}>{sufixSvg}</TouchableOpacity>
      </View>
      {error ? (
        <View style={styles.errorMsg}>
          <View style={styles.errorIconView}>{<ErrorIcon />}</View>
          <View style={styles.errorIconView}></View>
          <Text style={styles.text}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};
export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F9',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 12,
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeInput: {
    fontSize: moderateScale(14),
    color: '#000',
    paddingVertical: moderateVerticalScale(15),
    paddingHorizontal: moderateScale(15),
    borderRightWidth: 1,
    borderColor: '#E8ECF4',
    minWidth: moderateScale(65),
  },
  input: {
    fontSize: moderateScale(14),
    color: '#000',
    paddingVertical: moderateVerticalScale(15),
    paddingHorizontal: moderateScale(15),
    flex: 1,
  },
  label: {
    color: 'grey',
    fontSize: 10,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
  errorMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFBBC2',
    borderRadius: 5,
    marginTop: moderateScale(5),
  },
  text: {
    color: '#F44336',
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
    paddingRight: moderateScale(10),
    paddingVertical: moderateVerticalScale(7),
  },
  errorIconView: {
    paddingLeft: 10,
  },
});
