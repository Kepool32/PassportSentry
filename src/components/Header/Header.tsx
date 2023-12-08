import React, { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/Logo.svg";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={styles.menu}>
        <a className={styles.menuItem} href="#">
          <p className={styles.menuText}>Найти преподавателя</p>
        </a>
        <a className={styles.menuItem} href="#">
          <p className={styles.menuText}>Стать преподавателем</p>
        </a>
      </div>
      <div className={styles.additionalButtons}>
        <div className={styles.butItems}>
          <select className={styles.switcher}>
            <option>RU</option>
            <option>EN</option>
          </select>
          <div className={styles.burger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.loginButton}>
          <a className={styles.AuthLink} href="/authorization">
            Войти
          </a>
        </div>

        <div className={styles.registrationButton}>
          <a className={styles.AuthLink} href="/registration">
            Зарегистрироваться
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
