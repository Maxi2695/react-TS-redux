import produce             from 'immer'
import { UserActionTypes } from "@utils/constants";
import { UserAction }      from "../types";
import { UserState }       from "@domain/user/user";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): Nullable<UserState> => produce(state, (draftState) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      draftState.loading = true;
      break;
    case UserActionTypes.FETCH_USER_SUCCESS:
      draftState.loading = false;
      draftState.user = action.payload;
      break;
    case UserActionTypes.FETCH_USER_ERROR:
      draftState.loading = false;
      draftState.error = action.payload;
      break;
    case UserActionTypes.FETCH_USER_NOT_FOUND:
      draftState.loading = false;
      draftState.error = action.payload;
      break;
    default:
      return state;
  }
}) 
