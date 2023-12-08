import React, { FC } from "react";
import styles from "./TutorBaner.module.scss";
import logo from "../../assets/images/BanerWom.svg";

const TutorBanner: FC = () => {
  return (
    <div className={styles.tutor}>
      <div>
        <h1 className={styles.tutorHeading}>
          <span className={styles.tutorItem}>TUTOR</span> — платформа для
          онлайн-
          <br />
          обучения иностранным языкам
        </h1>
      </div>
      <div className={styles.featuresContainer}>
        <div className={styles.featureItem}>
          <span className={styles.featureText}>
            Занимайтесь онлайн в удобное <br />
            время суток из любого места
          </span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureText}>
            Выбирайте опытных <br />
            преподавателей со всего мира
          </span>
        </div>
      </div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default TutorBanner;
