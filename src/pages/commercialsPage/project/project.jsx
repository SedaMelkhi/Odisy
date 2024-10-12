import { BracketSvg, LineSvg } from "../../../assets/svg";

import styles from "./project.module.css";

export const Project = () => {
  return (
    <div className={styles.col}>
      <div className={styles.flex}>
        <div className={styles.number}>
          <BracketSvg />
          <span>V</span>
          <BracketSvg className={styles.left} />
        </div>
        <div className={styles.marker}></div>
      </div>
      <div className={styles.project}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url('/1.png')` }}
        ></div>
        <div className={styles.name}>
          <div>название проекта</div>
          <LineSvg />
        </div>
      </div>
    </div>
  );
};
