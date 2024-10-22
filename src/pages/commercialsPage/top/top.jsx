import { Link } from "react-router-dom";
import { BracketSvg } from "../../../assets/svg";
import styles from "./top.module.css";

export const Top = ({ setIsOpen, countProjects, active }) => {
  return (
    <div className={styles.flex}>
      <div className={styles.menu}>
        <Link
          to="/commercials"
          className={styles.menu__item + " " + (active === 1 && styles.active)}
        >
          <BracketSvg />
          <span>Commercials</span>
          <BracketSvg className={styles.left} />
        </Link>
        <div
          className={styles.menu__item + " " + (active === 2 && styles.active)}
          onClick={() => active === 1 && setIsOpen(true)}
        >
          <BracketSvg />
          <span>Hidden garden</span>
          <BracketSvg className={styles.left} />
        </div>
        <div className={styles.count__mob}>
          <span>(</span>
          {countProjects} <span>)</span>
        </div>
      </div>
      <div className={styles.line + " " + styles.col}></div>
      <div className={styles.count}>
        <span>(</span>
        {countProjects} <span>)</span>
      </div>
      <div className={styles.col}></div>
    </div>
  );
};
