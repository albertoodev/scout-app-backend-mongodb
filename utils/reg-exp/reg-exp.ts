const email: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
const phone: RegExp = /^(05|06|07)\d{8}$/; // only for algerian local phone numbers
const verCode: RegExp = /^\d{6}$/;
const code: RegExp = /^[0-9a-fA-F]{24}$/; // only for mongodb object id


export default {
  email,
  password,
  phone,
  code,
  verCode,
};
