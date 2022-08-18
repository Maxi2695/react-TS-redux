import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from "../store/action-creators/userActions";
import { RootState } from "../types/stateType";

const UserList = ({
  error,
  fetchUsers,
  loading,
  users,
}: any) => {

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      {loading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user: any) => <div key={user.id}>{user.name}</div>)}
    </div>
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
)(UserList);

