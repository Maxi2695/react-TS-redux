import { UserAction, UserActionTypes, UserState } from "../../types/userTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: [],
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: true,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};
