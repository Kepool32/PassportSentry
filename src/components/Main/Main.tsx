import React, { FC } from "react";
import styles from "./Main.module.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthorizationForm from "../Forms/AuthorizationForm";
import RegistrationFrom from "../Forms/RegistrationFrom";
import UserProfile from "../UserProfile/UserProfile";

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/authorization" element={<AuthorizationForm />} />
          <Route path="/registration" element={<RegistrationFrom />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="*" element={<Navigate to="/authorization" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
