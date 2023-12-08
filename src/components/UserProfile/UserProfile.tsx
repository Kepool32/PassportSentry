import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";
import TutorBanner from "../Baners/TutorBanner";
import { useAuth } from "../../hooks/use-auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useTokenExpiration } from "../../hooks/useTokenExpiration";
import {logoutUser} from "../../store/reducers/ActionCreators";


const UserProfile: FC = () => {
  const { isAuth } = useAuth();
  const { user } = useAppSelector((state) => state.userReducer);
  const accessToken = user?.access_token;
  const { formattedTimeRemaining } = useTokenExpiration(accessToken);
  const dispatch = useAppDispatch();

  const handleLogout = () => {

    dispatch(logoutUser());

  };

  if (!isAuth) {
    return <Navigate to="/authorization" />;
  }

  return (
      <div className={styles.container}>

        <div className={styles.formContainer}>
          <TutorBanner />
          <div className={styles.formContent}>
            <div className={styles.tokenInfo}>
              <h2>Время окончания токена: {formattedTimeRemaining}</h2>
              <h3>Текущий токен: {accessToken}</h3>
            </div>
            <div className={styles.buttonsContainer}>
              <button className={styles.logoutButton} onClick={handleLogout}>
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UserProfile;
