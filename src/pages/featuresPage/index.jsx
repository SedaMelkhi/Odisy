import { Link } from "react-router-dom";
import { BracketSvg } from "../../assets/svg";
import styles from "./featuresPage.module.css";

export const FeaturesPage = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.flex}>
        <div className={styles.menu}>
          <Link to="/" className={styles.menu__item + " " + styles.active}>
            <BracketSvg />
            <span>Commercials</span>
            <BracketSvg className={styles.left} />
          </Link>
          <Link to="/" className={styles.menu__item}>
            <BracketSvg />
            <span>Hidden garden</span>
            <BracketSvg className={styles.left} />
          </Link>
          <div className={styles.count__mob}>
            <span>(</span>24 <span>)</span>
          </div>
        </div>
        <div className={styles.line + " " + styles.col}></div>
        <div className={styles.count}>
          <span>(</span>24 <span>)</span>
        </div>

        <div className={styles.col}></div>
      </div>
    </div>
  );
};
