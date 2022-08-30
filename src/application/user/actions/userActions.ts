import axios               from 'axios';
import { Dispatch }        from 'redux';
import { USER_NOT_FOUND, 
         LOADING_ERROR }   from '@utils/constants';
import { UserActionTypes } from '@utils/constants';
import { User }            from '@domain/user/user';

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

export const fetchUsers = (name: Name, email: Email) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USER,
      });
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?name=${name}&email=${email}`);
      if (data?.length) {
        setTimeout(() => {
          dispatch({
            type: UserActionTypes.FETCH_USER_SUCCESS,
            payload: data[0]
          });
        }, 500);
        return data[0]
      } else {
        dispatch({
          type: UserActionTypes.FETCH_USER_NOT_FOUND,
          payload: USER_NOT_FOUND
        })
        return data;
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: LOADING_ERROR,
      });
    }
  };
};
