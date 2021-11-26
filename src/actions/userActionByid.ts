import * as Redux from "redux";
import { WebActionTypes } from "../constants/action_type";

export interface LoadUserIdSuccess extends Redux.Action {
  type: WebActionTypes.set_User_id;
  usersbyId: any[];
}
export const setUsers = (users: any)  => {
  return {
    type: WebActionTypes.set_User_id,
    usersbyId: users,
  };
};
