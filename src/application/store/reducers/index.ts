import { combineReducers } from "redux";
import { todoReducer }     from "@application/todo/reducers/todoReducer";
import { userReducer }     from "@application/user/reducers/userReducer";

export const rootReducer = combineReducers({
  userReducer, todoReducer
})

