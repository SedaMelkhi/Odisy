import { Link } from "react-router-dom";
import { BracketSvg } from "../../assets/svg";
import { HomePage } from "../homePage";

import styles from "./soonPage.module.css";

export const SoonPage = () => {
  return (
    <div>
      <HomePage />
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
    </div>
  );
};
