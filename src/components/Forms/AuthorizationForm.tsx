import React, { FC, ReactNode } from "react";
import styles from "./AuthorizationForm.module.scss";
import TutorBanner from "../Baners/TutorBanner";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import { useAppDispatch } from "../../hooks/redux";
import { AuthorizationUser } from "../../store/reducers/ActionCreators";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";


const AuthorizationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const onSubmit: SubmitHandler<FieldValues>= (data) => {
    dispatch(
      AuthorizationUser({
        email: data.email,
        password: data.password,
        device: "web",
      }),
    );
    reset();

  };
  if (isAuth) {
    return <Navigate to="/user" />;
  }


  return (
    <div className={styles.form}>
      <TutorBanner />
      <form
        className={styles.authorizationForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.AuthText}>Вход</h1>
        <div className={styles.formGroup}>
          <span className={styles.AuthTextData}>Электронная почта</span>
          <input
            className={styles.input}
            {...register("email", {
              required: "Поле обязательное к заполнению",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный адрес электронной почты",
              },
            })}
          />
          {errors?.email && <span className={styles.spanError}>{errors?.email?.message as ReactNode}</span>}
        </div>
        <div className={styles.formGroup}>
          <span className={styles.AuthTextData}>Пароль</span>
          <input
            className={styles.input}
            type="password"
            {...register("password", {
              required: "Поле обязательное к заполнению",
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
            })}
          />
          {errors?.password && (
            <span className={styles.spanError}>{errors?.password?.message as ReactNode}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <button className={styles.loginButton} type="submit">
            Войти
          </button>
          <div className={styles.additionalLinks}>
            <span className={styles.forgotPasswordLink}>
              У вас ещё нет аккаунта?
            </span>
            <a href="/registration" className={styles.registerLink}>
              Зарегистрироваться
            </a>
          </div>
        </div>
        <Loader/>
      </form>
    </div>
  );
};

export default AuthorizationForm;
