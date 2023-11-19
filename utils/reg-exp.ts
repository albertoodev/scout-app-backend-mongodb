function emailRegExp(email: string) {
  const emailRegExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegExp.test(email) ?? false;
}
function passRegExp(password: string) {
  const passwordRegExp: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegExp.test(password) ?? false;
}
function phoneRegExp(phone: string) {
  const phoneRegExp: RegExp = /^(05|06|07)\d{8}$/;
  return phoneRegExp.test(phone) ?? false;
}

function emailVerificationCodeRegExp(code: string) {
  const codeRegExp: RegExp = /^\d{6}$/;
  return codeRegExp.test(code) ?? false;
}

export default {
  emailRegExp,
  passRegExp,
  phoneRegExp,
  emailVerificationCodeRegExp,
};
