import React from 'react';
import {View} from 'react-native';
import {AppButton, AppHeader, AppText, AppTextInput} from '../../components';
import {styles} from './styles';

interface Props {
  onLoginPress: () => void;
  onSignupPress: () => void;
  errors: any;
  loginInfo: any;
  isLoading: boolean;
  isPasswordSecure: boolean;
  setLoginInfo: (value: any) => void;
  setIsSecurePassword: (value: boolean) => void;
}

export default function LoginComponent({
  onLoginPress,
  onSignupPress,
  errors,
  loginInfo,
  isLoading,
  isPasswordSecure,
  setLoginInfo,
  setIsSecurePassword,
}: Props) {
  return (
    <View style={styles.screen}>
      <AppHeader />

      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Log in</AppText>
        <AppText style={styles.subtitle}>
          {
            'Welcome back! Please enter your credentials to access your account.'
          }
        </AppText>
        <AppTextInput
          placeholder="Enter your mobile number"
          onChangeText={userName =>
            setLoginInfo({...loginInfo, userName: userName})
          }
          value={loginInfo?.userName}
          countryCode={loginInfo?.country_code}
          onCountryCodeChange={country_code =>
            setLoginInfo({
              ...loginInfo,
              country_code: country_code.length === 0 ? '+' : country_code,
            })
          }
          inputMode={'numeric'}
          keyboardType={'phone-pad'}
          maxLength={10}
          error={errors?.userName}
        />
        <AppTextInput
          placeholder="Enter your password"
          onChangeText={password =>
            setLoginInfo({...loginInfo, password: password})
          }
          value={loginInfo?.password}
          secureTextEntry={isPasswordSecure}
          onPress={() => setIsSecurePassword(!isPasswordSecure)}
          error={errors?.password}
        />
        <AppButton
          title={'Login'}
          style={styles.button}
          onPress={onLoginPress}
          isLoading={isLoading}
        />
        <AppText style={styles.bottomText}>
          Don't have an account?{' '}
          <AppText style={styles.signUpText} onPress={onSignupPress}>
            Sign up
          </AppText>
        </AppText>
      </View>
    </View>
  );
}
