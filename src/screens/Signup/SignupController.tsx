import React, {useState} from 'react';
import SignupComponent from './SignupComponent';
import {ApiCall} from '../../config';
import {LocalStorageKeys} from '../../constant/LocalStorageKeys';
import {LocalStorage} from '../../utils';
import {
  ValidateAge,
  ValidateName,
  ValidatePassword,
  ValidatePhone,
} from '../../helpers/Validator';
import moment from 'moment';

interface Props {
  navigation: any;
  route: any;
}

export default function SignupController({navigation, route}: Props) {
  const initialValue = {
    password: '',
    full_name: '',
    age: '',
    email: '',
    phone: '',
    surgery_date: '',
    binding_id: '',
    gender: '',
    address: '',
    country_code: '',
  };
  const [registerInfo, setRegisterInfo] = useState<any>({
    ...initialValue,
    surgery_date: new Date(),
    country_code: '+49',
  });
  const [isPasswordSecure, setIsSecurePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [errors, setErrors] = useState(initialValue);

  const registerApi = async () => {
    setIsLoading(true);
    const response = await ApiCall({
      endpoint: 'auth/register',
      method: 'POST',
      data: {
        full_name: registerInfo.full_name,
        password: registerInfo.password,
        age: registerInfo.age,
        email: registerInfo.email,
        phone: registerInfo.country_code + registerInfo.phone,
        surgery_date: moment(registerInfo.surgery_date).format('YYYY-MM-DD'),
        binding_id: registerInfo.binding_id,
        gender: registerInfo.gender?.value,
        address: registerInfo.address,
        user_type: route.params.for.toUpperCase(),
      },
    });
    setIsLoading(false);
    console.log(response);

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
      setRegisterInfo('');
    }
  };

  const ValidatorHandler = () => {
    let newErrors: any = {};
    let isValid: boolean = true;
    const statusFullName = ValidateName(registerInfo.full_name);
    const statusPassword = ValidatePassword(registerInfo.password);
    const statusAge = ValidateAge(registerInfo.age);
    const statusEmail = ValidateName(registerInfo.email);
    const statusPhone = ValidatePhone(
      registerInfo.country_code + registerInfo.phone,
    );
    const statusSurgeryDate = ValidateName(
      moment(registerInfo.surgery_date).format('YYYY-MM-DD'),
    );
    // const statusBindingId = ValidateName(registerInfo.binding_id);
    const statusGender = ValidateName(registerInfo.gender?.value ?? '');
    // const statusAddress = ValidateAddress(registerInfo.address);

    if (statusFullName) {
      newErrors.full_name =
        statusFullName === 1 ? 'Full Name is Required' : 'Full Name is invalid';
      isValid = false;
    }
    if (statusPassword) {
      newErrors.password =
        statusPassword === 1
          ? 'Password is Required'
          : 'Password should contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one symbol, and one number.';
      isValid = false;
    }
    if (route.params?.for === 'Patient' && statusAge) {
      newErrors.age = statusAge === 1 ? 'Age is Required' : 'Age is invalid';
      isValid = false;
    }
    if (statusEmail) {
      newErrors.email =
        statusEmail === 1 ? 'Email is Required' : 'Email is invalid';
      isValid = false;
    }
    if (statusPhone) {
      newErrors.phone =
        statusPhone === 1 ? 'Phone No. is Required' : 'Phone No. is invalid';
      isValid = false;
    }
    if (route.params?.for === 'Patient' && statusSurgeryDate) {
      newErrors.surgery_date =
        statusSurgeryDate === 1
          ? 'Surgery Date is Required'
          : 'Surgery Date is invalid';
      isValid = false;
    }
    // if (statusBindingId) {
    //   newErrors.binding_id =
    //     statusBindingId === 1 ? 'Id is Required' : 'Id is invalid';
    //   isValid = false;
    // }
    if (route.params?.for === 'Patient' && statusGender) {
      newErrors.gender =
        statusGender === 1 ? 'Gender is Required' : 'Gender is invalid';
      isValid = false;
    }
    // if (statusAddress) {
    //   newErrors.address =
    //     statusAddress === 1 ? 'Address is Required' : 'Address is invalid';
    //   isValid = false;
    // }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = () => {
    if (ValidatorHandler()) {
      registerApi();
    }
  };
  return (
    <SignupComponent
      route={route}
      onSignupPress={submitHandler}
      registerInfo={registerInfo}
      setRegisterInfo={setRegisterInfo}
      isPasswordSecure={isPasswordSecure}
      setIsSecurePassword={setIsSecurePassword}
      isLoading={isLoading}
      errors={errors}
      isCalendar={isCalendar}
      setIsCalendar={setIsCalendar}
      isDropDown={isDropDown}
      setIsDropDown={setIsDropDown}
    />
  );
}
