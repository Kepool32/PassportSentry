import React, { FC } from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/LogoWhite.svg";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={styles.companyInfo}>
        <h3 className={styles.footerTitle}>О компании</h3>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <a href="#">О нас</a>
          </li>
          <li className={styles.footerItem}>
            <a href="#">Найти репетитора</a>
          </li>
          <li className={styles.footerItem}>
            <a href="#">Стать преподавателем</a>
          </li>
          <li className={styles.footerItem}>
            <a href="#">Задать вопрос</a>
          </li>
        </ul>
        <div className={styles.footerMarkTitle}>
          <p className={styles.footerMarkItem}>Условия использования</p>
        </div>
      </div>
      <div className={styles.companyInfo}>
        <h3 className={styles.footerTitle}>Преподаватели</h3>
        <div className={styles.footerLang}>
          <div>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <a href="#">Английского</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Испанского</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Немецкого</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Китайского</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Русского</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className={styles.footerList}>
              <li className={styles.footerItem}>
                <a href="#">Португальского</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Иврита</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Японского</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Греческого</a>
              </li>
              <li className={styles.footerItem}>
                <a href="#">Арабского</a>
              </li>
              <li className={styles.footerMore}>
                <a href="#">Ещё</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerMarkTitle}>
          <p className={styles.footerMarkItem}>Политика конфиденциальности</p>
        </div>
      </div>
      <div className={styles.companyInfo}>
        <h3 className={styles.footerTitle}>Связаться с нами</h3>
        <div className={styles.footerItemEmail}>
          <p>asktutor24@gmail.com</p>
        </div>
        <div className={styles.footerMarkTitle}>
          <p className={styles.footerMarkItem}>
            © 2021–2022 All rights reserved
          </p>
        </div>
      </div>
      <div className={styles.footerMarkMobile}>
        <a className={styles.footerMarkMobileItem} href="#">Условия использования</a>
        <a className={styles.footerMarkMobileItem} href="#">
          Политика конфиденциальности
        </a>
        <a className={styles.footerMarkMobileItem} href="#">
          © 2021–2022 All rights reserved
        </a>
      </div>
    </div>
  );
};

export default Footer;
