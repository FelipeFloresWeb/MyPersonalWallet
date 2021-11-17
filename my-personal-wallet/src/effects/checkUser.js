import regex from '../utils/regex';

const checkUser = (name, email, password, repeatPassword) => {
  if (name.length > 3
    && regex.email.test(email)
    && password.length > 5
    && password === repeatPassword) {
    return true;
  }
  return false;
};

export default checkUser;
