import React, { useState } from 'react';
import { RootState }       from '@application/store/reducers';
import { connect }         from 'react-redux';
import { fetchUsers }      from '@application/user/actions/userActions';
import { User, UserState } from '@domain/user/user';
import Loading             from '../../common/Loading';
import Error               from '../../common/Error';

interface IModal {
  fetchUsers: (name: Name, email: Email) => Promise<User>;
  loading: LoadingStatus;
  setActiveModal: (activeModal: boolean) => void;
  setIsLogin: (isLogin: boolean) => void;
  user: Nullable<User>;
  error: Nullable<ErrorType>;
};

const Modal = ({
  fetchUsers,
  loading,
  setActiveModal,
  setIsLogin,
  error,
}: IModal) => {
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
    const user = await fetchUsers(userName, userEmail);

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
            value={userName}
            onChange={changeUserName}
          />
          <input
            type="text"
            placeholder="Введите email пользователя"
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

const mapStateToProps = (state: RootState): UserState => state.userState;

const mapDispatchToProps = {
  fetchUsers,
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
