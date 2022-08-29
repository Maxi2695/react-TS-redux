import { UserAction, UserActionTypes, UserState } from "@domain/user/user";
const initialState: UserState | null = null

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
