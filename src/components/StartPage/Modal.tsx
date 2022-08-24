import React, { useEffect, useState, FC } from 'react';
import { RootState } from '../../types/stateType';
import { fetchUsers } from '../../store/action-creators/userActions';
import { connect } from 'react-redux';
import { checkUser } from '../../utils';
import { User } from '../../types/userTypes';
import Loading from '../Loading';
import { Email, Name } from '../../global';

interface IModal {
  fetchUsers: (name: Name, email: Email) => Promise<User[]>;
  loading: boolean;
  setActiveModal: (activeModal: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  users: User[];
}

const Modal: FC<IModal> = ({
  fetchUsers,
  loading,
  setActiveModal,
  setIsLogin,
  users
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

    if (user?.length) {
      localStorage.setItem('todoUSer', userName);
      setActiveModal(false);
      setIsLogin(true);
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

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
