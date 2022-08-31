import { UserActionTypes } from "@utils/constants";
import { UserAction }      from "../types";
import { UserState }       from "@domain/user/user";

const initialState: Nullable<UserState> = null;

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState | null => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        loading: true,
        error: null,
        user: initialState,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        user: action.payload,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        user: initialState,
      };
    case UserActionTypes.FETCH_USER_NOT_FOUND:
      return {
        loading: false,
        error: action.payload,
        user: initialState,
      }
    default:
      return state;
  }
};
