import { useSelector } from "react-redux";
import { Footer, Net } from "../../components";

import styles from "./homePage.module.css";
import { useEffect } from "react";

export const HomePage = () => {
  const bg = useSelector((state) => state.bg.bg);
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Отключаем прокрутку
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <main className={`${styles.bg_container} container`}>
      {bg && (
        <video autoPlay playsInline loop muted className={styles.bg}>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <Net />
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
};
