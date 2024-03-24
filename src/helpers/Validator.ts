export const ValidateName = (name: any) => {
  if (name?.trim() === '') {
    return 1;
  }
  return false;
};
export const ValidateAddress = (address: any) => {
  if (address?.trim() === '') {
    return 1;
  }
  return false;
};
export const ValidateAadharNo = (aadharNo: any) => {
  if (!/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(aadharNo)) {
    return 1;
  }
  return false;
};
export const ValidatePassword = (password: any) => {
  if (password?.trim() === '') {
    return 1;
  }
  if (
    !/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(
      password,
    )
  ) {
    return 2;
  }
  return false;
};
export const ValidateAge = (age: any) => {
  if (age?.trim() === '') {
    return 1;
  }
  return false;
};
export const ValidatePhone = (mobile: any) => {
  if (mobile?.trim() === '') {
    return 1;
  }
  if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(mobile)) {
    return 2;
  }
  return false;
};
