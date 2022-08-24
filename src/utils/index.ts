import { Email, Name } from '../global';
import { User } from '../types/userTypes';

export const checkUser = (
  nameValue: Name, 
  emailValue: Email, 
  users: User[]
  ) => {
  const foundUser = users.find((user) => user.name === nameValue);
  const foundEmail = users.find((user) => user.email === emailValue);
  return foundUser && foundEmail;
};
