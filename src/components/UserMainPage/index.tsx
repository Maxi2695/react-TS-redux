import React, { useEffect } from "react";
import TodoList from "./TodoList";

const UserMainPage = ({
  isLogin,
  setIsLogin,
}: any) => {

  const logOut = () => {
    localStorage.setItem('todoUSer', '');
    setIsLogin(false)
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <TodoList />
      <button onClick={logOut}>Выйти</button>
    </div>
  )
}

export default UserMainPage;
