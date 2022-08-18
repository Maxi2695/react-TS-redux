import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/userTypes";


export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USERS
      })
      const resposne = await axios.get('https://jsonplaceholder.typicode.com/users');
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: resposne.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}
