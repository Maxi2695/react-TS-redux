import React, { useEffect, useState } from "react";
import { RootState } from "../types/stateType";
import { connect } from 'react-redux';
import Modal from "./Modal";
import { fetchUsers } from "../store/action-creators/userActions";
import UsersList from "./UsersList";

const MainPage = ({
  fetchUsers,
  users
}: any) => {

  const [activeModal, setActiveModal] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      {activeModal ?
        <Modal /> :
        <button onClick={() => setActiveModal(!activeModal)}>ВОЙТИ</button>
      }
    </div>
    // <UsersList/>
  )
}


const mapStateToProps = (state: RootState) => ({
  ...state.userReducer
});

const mapDispatchToProps = ({
  fetchUsers
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
