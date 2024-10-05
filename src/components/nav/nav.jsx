import { Link } from "react-router-dom";
import { BracketSvg } from "../../assets/svg";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/menu" className={styles.flex}>
        <BracketSvg /> <span>menu</span>
      </Link>
      <Link to="/">
        <img src="/logo.svg" alt="odisy" />
      </Link>
      <Link to="/contacts" className={styles.flex}>
        <span>contact us</span> <BracketSvg className={styles.left} />
      </Link>
    </nav>
  );
};
