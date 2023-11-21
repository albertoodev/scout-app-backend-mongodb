import * as regExp from "./reg-exp";

export default {
  emailValidation: (email: string): boolean => regExp.emailRegExp.test(email),
  passValidation: (password: string): boolean =>
    regExp.passRegExp.test(password),
  phoneValidation: (phone: string): boolean => regExp.phoneRegExp.test(phone),
  emailVerificationCodeValidation: (code: string): boolean =>
    regExp.emailVerificationCodeRegExp.test(code),
};
