import * as Redux from "redux";
import { WebActionTypes } from "../constants/action_type";

export interface LoadUserSuccess extends Redux.Action {
  type: WebActionTypes.set_users;
  users: any[];
}
export const setUsers = (users: any) => {
  return {
    type: WebActionTypes.set_users,
    users: users,
  };
};
