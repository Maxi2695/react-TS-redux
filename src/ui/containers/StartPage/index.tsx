import React, { useEffect, useState } from 'react';
import Modal                          from './Modal';
import UserMainPage                   from '../UserMainPage';

const StartPage = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState(false);

  const userIdInLS = Number(localStorage.getItem('todoUSer'));

  useEffect(() => {
    if (userIdInLS) {
      setIsLogin(true);
    }
  }, [userIdInLS]);

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

export default StartPage;

