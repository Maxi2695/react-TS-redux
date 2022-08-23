import React, { useEffect } from "react";
import { RootState } from "../types/stateType";
import { connect } from 'react-redux';

const Modal = ({
  users,
}: any) => {

  useEffect(() => {

  }, [])

  return (
    <div>
      <form >
        <input type="text" placeholder="Введите имя пользователя" />
        <input type="text" placeholder="Введите email пользователя" />
        <input type="submit" />
        <input type="button" value='Отмена' />
      </form>
    </div>
  )
}


const mapStateToProps = (state: RootState) => ({
  ...state.userReducer
});

const mapDispatchToProps = ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
