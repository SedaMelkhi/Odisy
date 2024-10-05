import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { NavContent } from "./navContent/navContent";

import { BracketSvg } from "../../assets/svg";

import styles from "./nav.module.css";

const sidebar = {
  open: (
    size = window.innerWidth > window.innerHeight
      ? window.innerWidth
      : window.innerHeight
  ) => ({
    clipPath: `circle(${size < 2048 ? size * 1.5 : size * 2}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "",
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 40,
    },
  },
};

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log(isOpen);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className={`${styles.nav} ${!isOpen && styles.closed}`}
        ref={containerRef}
      >
        <motion.div
          className={`${styles.background} ${
            isOpen ? styles.visible : styles.hidden
          }`}
          variants={sidebar}
        />
        <NavContent toggleOpen={toggleOpen} />
      </motion.nav>
      <nav className={styles.nav}>
        <div className={styles.flex} onClick={() => toggleOpen()}>
          <BracketSvg className={styles.bracket} /> <span>menu</span>
        </div>
        <Link to="/">
          <img src="/logo.svg" alt="odisy" className={styles.logo} />
        </Link>
        <Link to="/contacts" className={styles.flex}>
          <span>contact us</span>{" "}
          <BracketSvg className={styles.bracket + " " + styles.left} />
        </Link>
      </nav>
    </>
  );
};
