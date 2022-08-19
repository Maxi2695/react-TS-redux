import React, { useEffect, FC } from "react";
import { connect } from 'react-redux';
import { fetchUsers } from "../store/action-creators/userActions";
import { RootState } from "../types/stateType";
import { UserType } from "../types/userTypes";

interface UserListType {
  error: string | null,
  fetchUsers: () => void;
  loading: boolean,
  users: UserType[]
}

const UserList: FC<UserListType> = ({
  error,
  fetchUsers,
  loading,
  users,
}) => {
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <div>
      {loading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user: UserType) => <div key={user.id}>{user.name}</div>)}
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

