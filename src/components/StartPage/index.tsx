import React, { useEffect, useState, FC } from 'react';
import Modal from './Modal';
import UserMainPage from '../UserMainPage';

const StartPage: FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('todoUSer')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      {isLogin && <UserMainPage
        isLogin={isLogin}
        setIsLogin={setIsLogin}
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

export default StartPage;
