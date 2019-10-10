import { UserActionTypes } from "./user.actiontype";
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
