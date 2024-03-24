import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {colors} from '../utils';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {ErrorIcon} from '../assets/svg';

interface Props {
  data: any[];
  value: any;
  placeholder?: string | undefined;
  error?: string;
  onFocus?: (() => void) | undefined;
  onBlur?: (() => void) | undefined;
  onChange: (item: any) => void;
}

export default function AppDropDown({
  data,
  value,
  placeholder,
  error,
  onFocus,
  onBlur,
  onChange,
}: Props) {
  return (
    <>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          iconColor={colors.blue}
        />
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F9',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 12,
    width: '100%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
  },
  dropdown: {
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(15),
  },
  placeholderStyle: {
    fontSize: moderateScale(14),
    color: colors.blue,
  },
  selectedTextStyle: {
    fontSize: moderateScale(14),
    color: '#000000',
  },
  errorMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#FFBBC2',
    borderRadius: 5,
    marginTop: moderateScale(5),
  },
  text: {
    color: '#F44336',
    fontSize: 12,
    fontWeight: 'bold',
  },
  errorIconView: {
    paddingLeft: 10,
  },
});
