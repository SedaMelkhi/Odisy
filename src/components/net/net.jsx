import { SquareSvg } from "../../assets/svg";
import styles from "./net.module.css";

export const Net = () => {
  return (
    <div className={styles.lines}>
      <div className={styles.line_vertical}></div>
      <div className={styles.square}>
        <div className={styles.flex}>
          <SquareSvg /> <SquareSvg className={styles.right} />
        </div>
        <div className={`${styles.flex}`}>
          <SquareSvg className={styles.left} />
          <SquareSvg className={styles.bottom} />
        </div>
      </div>
      <div className={styles.line_horizontal}></div>
    </div>
  );
};
