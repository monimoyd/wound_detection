import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  AppButton,
  AppDatePicker,
  AppDropDown,
  AppHeader,
  AppText,
  AppTextInput,
} from '../../components';
import {styles} from './styles';

interface Props {
  route: any;
  onSignupPress: () => void;
  registerInfo: any;
  setRegisterInfo: (value?: any) => void;
  setIsCalendar: (value?: any) => void;
  isPasswordSecure: boolean;
  isCalendar: boolean;
  setIsSecurePassword: (value?: any) => void;
  isDropDown: boolean;
  setIsDropDown: (value?: any) => void;
  isLoading: boolean;
  errors: any;
}

const data = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

export default function SignupComponent({
  route,
  onSignupPress,
  errors,
  isLoading,
  isPasswordSecure,
  isCalendar,
  registerInfo,
  isDropDown,
  setIsDropDown,
  setIsSecurePassword,
  setIsCalendar,
  setRegisterInfo,
}: Props) {
  return (
    <View style={styles.screen}>
      <AppHeader />

      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Sign up for {route.params.for}</AppText>
        <AppText style={styles.subtitle}>
          {route.params?.for === 'Patient'
            ? 'Sign up to take control of your health journey and connect with trusted doctors for personalized care.'
            : 'Join our community of healthcare professionals to enhance patient care and streamline your practice.'}
        </AppText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppTextInput
            placeholder="Full Name"
            onChangeText={full_name =>
              setRegisterInfo({...registerInfo, full_name: full_name})
            }
            value={registerInfo?.full_name}
            error={errors?.full_name}
          />
          {route.params?.for === 'Patient' ? (
            <AppTextInput
              placeholder="Enter your mobile number"
              value={registerInfo?.phone}
              onChangeText={phone =>
                setRegisterInfo({...registerInfo, phone: phone})
              }
              countryCode={registerInfo?.country_code}
              onCountryCodeChange={country_code =>
                setRegisterInfo({
                  ...registerInfo,
                  country_code: country_code.length === 0 ? '+' : country_code,
                })
              }
              inputMode={'numeric'}
              keyboardType={'phone-pad'}
              maxLength={10}
              error={errors?.phone}
            />
          ) : null}
          <AppTextInput
            placeholder="E-mail"
            onChangeText={email =>
              setRegisterInfo({...registerInfo, email: email})
            }
            value={registerInfo?.email}
            keyboardType={'email-address'}
            error={errors?.email}
          />
          {route.params?.for === 'Patient' ? (
            <AppDropDown
              data={data}
              placeholder={'Select Gender'}
              value={registerInfo?.gender}
              onFocus={() => setIsDropDown(true)}
              onBlur={() => setIsDropDown(false)}
              onChange={item => {
                console.log('🚀 ~ item:', item, registerInfo?.gender?.label);
                setRegisterInfo({...registerInfo, gender: item});
                setIsDropDown(false);
              }}
              error={errors?.gender}
            />
          ) : null}
          {/* <AppTextInput
            placeholder={
              route.params?.for === 'Patient' ? 'Patient ID' : 'Doctor ID'
            }
            onChangeText={binding_id =>
              setRegisterInfo({...registerInfo, binding_id: binding_id})
            }
            value={registerInfo?.binding_id}
            error={errors?.binding_id}
          /> */}
          {/* <AppTextInput
            placeholder="Address"
            onChangeText={address =>
              setRegisterInfo({...registerInfo, address: address})
            }
            value={registerInfo?.address}
            error={errors?.address}
          /> */}
          {route.params?.for === 'Patient' ? (
            <AppDatePicker
              onPress={() => setIsCalendar(true)}
              open={isCalendar}
              date={registerInfo?.surgery_date}
              mode={'date'}
              onConfirm={date => {
                setIsCalendar(false);
                setRegisterInfo({...registerInfo, surgery_date: date});
              }}
              onCancel={() => {
                setIsCalendar(false);
              }}
              error={errors?.surgery_date}
            />
          ) : null}
          <AppTextInput
            placeholder="Password"
            onChangeText={password =>
              setRegisterInfo({...registerInfo, password: password})
            }
            value={registerInfo?.password}
            secureTextEntry={isPasswordSecure}
            onPress={() => setIsSecurePassword(!isPasswordSecure)}
            error={errors?.password}
          />
          {/* <AppText style={styles.bottomText}>
            Don't have an account?{' '}
            <AppText style={styles.signUpText}>Sign up</AppText>
          </AppText> */}
        </ScrollView>
        <AppButton
          title={'Signup'}
          style={styles.button}
          onPress={onSignupPress}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
