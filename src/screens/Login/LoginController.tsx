import React, {useState} from 'react';
import LoginComponent from './LoginComponent';
import {ApiCall} from '../../config';
import {LocalStorage} from '../../utils';
import {LocalStorageKeys} from '../../constant/LocalStorageKeys';
import {ValidatePassword, ValidatePhone} from '../../helpers/Validator';
import {Alert} from 'react-native';

interface Props {
  navigation: any;
}

export default function LoginController({navigation}: Props) {
  const initialValue = {
    userName: '',
    password: '',
    country_code: '',
  };
  const [loginInfo, setLoginInfo] = useState<any>({
    initialValue,
    country_code: '+49',
  });
  const [isPasswordSecure, setIsSecurePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(initialValue);

  const loginApi = async () => {
    setIsLoading(true);
    const response = await ApiCall({
      endpoint: 'auth/login',
      method: 'POST',
      data: {
        username: loginInfo.country_code + loginInfo.userName,
        password: loginInfo.password,
      },
    });
    setIsLoading(false);
    if (response?.status === 200) {
      LocalStorage.set(LocalStorageKeys.AUTH_TOKEN, response.data.auth_token);
      LocalStorage.set(LocalStorageKeys.USER_TYPE, response.data.user_type);
      LocalStorage.set(LocalStorageKeys.USER_NAME, response.data.full_name);

      navigation.reset({
        index: 0,
        routes: [
          {
            name:
              response.data.user_type === 'PATIENT'
                ? 'Patient App'
                : 'Doctor App',
          },
        ],
      });
      setLoginInfo('');
    } else {
      Alert.alert('Error', response.data.Message);
    }
  };

  const ValidatorHandler = () => {
    let newErrors: any = {};
    let isValid: boolean = true;
    const statusPhone = ValidatePhone(
      loginInfo.country_code + loginInfo.userName,
    );
    const statusPassword = ValidatePassword(loginInfo.password);

    if (statusPhone) {
      newErrors.userName =
        statusPhone === 1 ? 'UserName is Required' : 'UserName is invalid';
      isValid = false;
    }

    if (statusPassword) {
      newErrors.password =
        statusPassword === 1 ? 'Password is Required' : 'Password is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = () => {
    if (ValidatorHandler()) {
      loginApi();
    }
  };
  return (
    <LoginComponent
      onLoginPress={submitHandler}
      onSignupPress={() => navigation.navigate('SignupSelection')}
      isLoading={isLoading}
      loginInfo={loginInfo}
      isPasswordSecure={isPasswordSecure}
      errors={errors}
      setLoginInfo={setLoginInfo}
      setIsSecurePassword={setIsSecurePassword}
    />
  );
}
