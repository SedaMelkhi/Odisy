import { Link } from "react-router-dom";
import { BracketSvg } from "../../assets/svg";
import { useSelector } from "react-redux";
import { Footer, Net } from "../../components";
import { useEffect } from "react";

import styles from "./soonPage.module.css";

export const SoonPage = () => {
  const bg = useSelector((state) => state.bg.bg);
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Отключаем прокрутку
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div>
      <main className={`${styles.bg_container} container`}>
        {bg && (
          <video autoPlay playsInline loop muted className={styles.bg_video}>
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <Net />
      </main>
      <div className={styles.bg}>
        <div className={styles.text}>
          <h1 className={styles.title}>Sorry</h1>
          <p className={styles.description}>
            The page is under development but you can take a look at the
            projects we are doing
          </p>
          <Link to="/features" className={styles.link}>
            <BracketSvg />
            <span>our project</span>
            <BracketSvg className={styles.left} />
          </Link>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
