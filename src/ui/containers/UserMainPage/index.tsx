import TodoList            from "../TodoList";
import { setLocalStorage } from "@application/helpers";

interface IUserMainPage {
  setIsLogin: (isLogin: boolean) => void;
  userIdInLS?: number;
}

const UserMainPage = ({
  setIsLogin,
  userIdInLS,
}: IUserMainPage) => {

  const logOut = () => {
    const userId = '';
    setLocalStorage(userId, setIsLogin, false)
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
