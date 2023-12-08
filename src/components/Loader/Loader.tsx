import React from "react";
import styles from "./Loader.module.scss";
import { useAppSelector } from "../../hooks/redux";

const Loader = () => {
  const { isLoading } = useAppSelector((state) => state.userReducer);

  if (!isLoading) {
    return null;
  }
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
