import axios from 'axios';
import { Dispatch } from 'redux';
import { Email, Name } from '../../global';
import { UserAction, UserActionTypes } from '../../types/userTypes';

export const fetchUsers = (name: Name, email: Email) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS,
      });
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?name=${name}&email=${email}`);

      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: data,
        });
      }, 500);
      return data;
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
