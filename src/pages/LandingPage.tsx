import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../actions/userAction";
import { getUserApi } from "../api/userApi";
import { UserList } from "../basmodule";


export const LandinPage = () => {
  const users = useSelector((state: any) => state.allUsers);
  const dispatch = useDispatch();

  const dispatchUserAction = async () => {
    const response = await getUserApi();
    // console.log(response);
    dispatch(setUsers(response.data.Users));
  };

  useEffect(() => {
    dispatchUserAction();
  }, []);
 
  return (
    <div className="container">
    <UserList user={users} />
    </div>
  );
};
