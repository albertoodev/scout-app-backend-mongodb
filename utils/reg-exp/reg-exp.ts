const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegExp: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const phoneRegExp: RegExp = /^(05|06|07)\d{8}$/; // only for algerian local phone numbers
const emailVerificationCodeRegExp: RegExp = /^\d{6}$/;

export {
  emailRegExp,
  passRegExp,
  phoneRegExp,
  emailVerificationCodeRegExp,
};
