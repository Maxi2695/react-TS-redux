import React from "react";
import TodoList from "../TodoList";

interface IUserMainPage {
  setIsLogin: (isLogin: boolean) => void;
  userIdInLS?: number;
}

const UserMainPage = ({
  setIsLogin,
  userIdInLS,
}: IUserMainPage) => {

  const logOut = () => {
    localStorage.setItem('todoUSer', '');
    setIsLogin(false)
  }

  return (
    <div>
      <TodoList
        userIdInLS={userIdInLS}
      />
      <button onClick={logOut}>Выйти</button>
    </div>
  )
}

export default UserMainPage;
