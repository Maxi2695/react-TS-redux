import React, { useState, FC } from 'react';
import { RootState } from '../../types/stateType';
import { fetchUsers } from '../../application/user/actions/userActions';
import { connect } from 'react-redux';
import { User } from '../../domain/user/user';
import Loading from '../Loading';
import Error from '../Error';

interface IModal {
  fetchUsers: (name: Name, email: Email) => Promise<User>;
  loading: boolean;
  setActiveModal: (activeModal: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  user: User;
  error: string | null;
}

const Modal: FC<IModal> = ({
  fetchUsers,
  loading,
  setActiveModal,
  setIsLogin,
  error,
}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const changeUserName = ({ target: { value } }: any) => {
    setUserName(value);
  };

  const changeUserEmail = ({ target: { value } }: any) => {
    setUserEmail(value);
  };

  const userLogIn = async (event: any) => {
    event.preventDefault();
    const userNameValue = event.target.userName.value;
    const userEmailValue = event.target.userEmail.value;
    const user = await fetchUsers(userNameValue, userEmailValue);

    if (user?.id) {
      const userId = String(user.id);
      localStorage.setItem('todoUSer', userId);
      setActiveModal(false);
      setIsLogin(true);
    }
  };

  return (
    <div>
      {loading ?
        <Loading /> :
        <form onSubmit={userLogIn}>
          <input
            type="text"
            placeholder="Введите имя пользователя"
            name="userName"
            value={userName}
            onChange={changeUserName}
          />
          <input
            type="text"
            placeholder="Введите email пользователя"
            name="userEmail"
            value={userEmail}
            onChange={changeUserEmail}
          />
          <input type="submit" />
          <button onClick={() => setActiveModal(false)}>Отмена</button>
        </form>
      }
      {error && <Error message={error} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...state.userReducer,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
