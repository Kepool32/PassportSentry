import React, { FC, ReactNode } from "react";
import styles from "./RegistrationForm.module.scss";
import TutorBanner from "../Baners/TutorBanner";
import { useAppDispatch } from "../../hooks/redux";
import { RegistrationUser } from "../../store/reducers/ActionCreators";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const RegistrationFrom: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm();
  const { isAuth } = useAuth();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      RegistrationUser({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        device: "postman",
        user_type: 1,
        country: 0,
        date_of_birthday: data.dateOfBirth,
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
        className={styles.registrationForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles.heading1}>Регистрация</h1>
        <div>
          <div className={styles.formGroup}>
            <span className={styles.AuthTextData}>Имя</span>
            <input
              className={styles.input}
              {...register("firstName", {
                required: "Поле обязательное к заполнению",
              })}
            />
            {errors?.email && (
              <span className={styles.spanError}>{errors?.firstName?.message as ReactNode}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <span className={styles.AuthTextData}>Фамилия</span>
            <input
              className={styles.input}
              {...register("lastName", {
                required: "Поле обязательное к заполнению",
              })}
            />
            {errors?.email && (
              <span className={styles.spanError}>{errors?.lastName?.message as ReactNode}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <span className={styles.AuthTextData}>Дата рождения</span>
            <input
              className={styles.input}
              {...register("dateOfBirth", {
                required: "Поле обязательное к заполнению",
                pattern: {
                  value:
                    /^(20[0-2][0-4])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                  message: "Формат даты должен быть YYYY-MM-DD",
                },
              })}
            />
            {errors?.email && (
              <span className={styles.spanError}>{errors?.dateOfBirth?.message as ReactNode}</span>
            )}
          </div>
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
            {errors?.email && (
              <span className={styles.spanError}>{errors?.email?.message as ReactNode}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <span className={styles.AuthTextData}>Придумайте пароль</span>
            <input
              className={styles.input}
              type="password"
              {...register("password", {
                required: "Поле обязательное к заполнению",
                minLength: {
                  value: 8,
                  message: "Минимум 8 символов",
                },
                maxLength: {
                  value: 32,
                  message: "Максимум 32 символа",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]+$/,
                  message:
                    "Пароль должен содержать хотя бы одну заглавную букву, одну цифру и один специальный символ",
                },
              })}
            />
            {errors?.password && (
              <span className={styles.spanError}>{errors?.password?.message as ReactNode}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <span className={styles.AuthTextData}>Повторите пароль</span>
            <input
              className={styles.input}
              type="password"
              {...register("confirmPassword", {
                required: "Поле обязательное к заполнению",
                validate: (value) =>
                  value === watch("password") || "Пароли не совпадают",
              })}
            />
            {errors.confirmPassword && (
              <span className={styles.spanError}>{errors.confirmPassword.message as ReactNode}</span>
            )}
          </div>
          <div className={styles.formGroupRadio}>
            <input
              type="checkbox"
              id="agreeTerms"
              className="squareCheckbox"
              {...register("agreeTerms", { required: true })}
            />
            <label htmlFor="agreeTerms">
              Я согласен c
              <span className={styles.span}> условиями использования</span> и{" "}
              <span className={styles.span}>
                политикой
                <br /> конфиденциальности
              </span>
            </label>
          </div>
          <button
            className={styles.RegistButton}
            type="submit"
            disabled={!!errors.confirmPassword}
          >
            Зарегистрироваться
          </button>
          <div className={styles.additionalLinks}>
            <span className={styles.forgotPasswordLink}>
              У вас уже есть аккаунт?
            </span>
            <a href="/authorization" className={styles.AuthLink}>
              Войти
            </a>
          </div>
        </div>
        <Loader/>
      </form>
    </div>
  );
};

export default RegistrationFrom;
