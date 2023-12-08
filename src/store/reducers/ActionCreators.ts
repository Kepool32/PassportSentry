import { AppDispatch } from "../store";
import axios from "axios";
import {
  User,
  RegistrationUsers,
  AuthorizationUsers,
} from "../../models/IUser";
import { userSlice } from "./UserSlice";

const signupUrl: string = process.env.REACT_APP_SIGNUP_URL || "";
const signinUrl: string = process.env.REACT_APP_SIGNIN_URL || "";

export const RegistrationUser =
  (userData: RegistrationUsers) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.authFetching());
      const response = await axios.post<User>(signupUrl, userData);
      dispatch(userSlice.actions.authFetchingSuccess(response.data));
    } catch (e: any) {
      dispatch(userSlice.actions.authFetchingError(e.message));
    }
  };

export const AuthorizationUser =
  (userData: AuthorizationUsers) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.authFetching());

      const response = await axios.post<User>(signinUrl, userData);

      dispatch(userSlice.actions.authFetchingSuccess(response.data));
    } catch (e: any) {
      dispatch(userSlice.actions.authFetchingError(e.message));
    }
  };

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.clearUserState());
};
