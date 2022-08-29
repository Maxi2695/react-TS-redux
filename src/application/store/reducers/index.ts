import { combineReducers } from "redux";
import { todoReducer } from "../../todo/reducers/todoReducer";
import { userReducer } from "../../user/reducers/userReducer";


export const rootReducer = combineReducers({
  userReducer, todoReducer
})

