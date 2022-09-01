import { useState }                   from 'react';
import Modal                          from './Modal';
import * as userActions               from '@application/user/actions/userActions'
import { connect }                    from 'react-redux';
import UserMainPage                   from '../UserMainPage';
import { UserState }                  from '@domain/user/user';
import { useGetLocalStorage }         from '@application/helpers/hooks';
import { RootState }                  from '@application/store/reducers';

interface IStartPage {
  setIsLogin: (value: boolean) => void;
  isLogin: IsLogin;
}

const StartPage = ({
  setIsLogin,
  isLogin,
}: IStartPage) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  
  const { userIdInLS } = useGetLocalStorage(setIsLogin)

  return (
    <div>
      {isLogin &&
        <UserMainPage
          setIsLogin={setIsLogin}
          userIdInLS={userIdInLS}
        />}
      {(activeModal && !isLogin) &&
        <Modal
          setActiveModal={setActiveModal}
          setIsLogin={setIsLogin}
        />
      }
      {(!activeModal && !isLogin) &&
        <button onClick={() => setActiveModal(!activeModal)}>ВОЙТИ</button>
      }
    </div>
  );
};

const mapStateToProps = (state: RootState): UserState => state.userState;

const mapDispatchToProps = {
  ...userActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

