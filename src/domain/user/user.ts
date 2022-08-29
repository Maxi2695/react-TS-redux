
interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: Name;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: UniqueId;
  name: Name;
  username: string;
  email: Email;
  address: Address;
  phone: Phone;
  website: string;
  company: Company;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export enum UserActionTypes {
  FETCH_USER = "FETCH_USERS",
  FETCH_USER_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USER_ERROR = "FETCH_USERS_ERROR",
  FETCH_USER_NOT_FOUND = "FETCH_USER_NOT_FOUND"
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USER;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}
interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

interface FetchUserNotFound {
  type: UserActionTypes.FETCH_USER_NOT_FOUND;
  payload: string;
}

export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | FetchUserNotFound;
