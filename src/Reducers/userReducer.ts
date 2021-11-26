import { WebActionTypes } from "../constants/action_type";
import { AllActions } from "../actions/allActions";

export const intialState = {
  users: [],
};
export const usersReducer = (state = intialState, action: AllActions) => {
  switch (action.type) {
    case WebActionTypes.set_users:
      return [...action.users];
    default:
      return state;
  }
};
