import axios               from 'axios';
import { Dispatch }        from 'redux';
import { USER_NOT_FOUND, 
         LOADING_ERROR }   from '@utils/constants';
import { UserActionTypes } from '@utils/constants';
import { UserAction }      from '../types';

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
