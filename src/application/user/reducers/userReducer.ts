import { UserAction, UserActionTypes, UserState } from "../../../domain/user/user";

const initialState: UserState = {
  user: {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  },
  loading: false,
  error: "",
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        loading: true,
        error: null,
        user: initialState.user,
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
        user: initialState.user,
      };
    case UserActionTypes.FETCH_USER_NOT_FOUND:
      return {
        loading: false,
        error: action.payload,
        user: initialState.user,
      }
    default:
      return state;
  }
};
