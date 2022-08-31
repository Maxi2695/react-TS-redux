import { User }            from "@domain/user/user";
import { UserActionTypes } from "@utils/constants";

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
