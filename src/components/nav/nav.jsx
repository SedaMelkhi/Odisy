import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { NavItems } from "./navItems";

import { BracketSvg } from "../../assets/svg";

import styles from "./nav.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 30,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0 at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
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
    <nav className={styles.nav}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className={`background ${isOpen ? "visible" : "hidden"}`}
          variants={sidebar}
        />
        <NavItems />
      </motion.nav>
      <div className={styles.flex} onClick={() => toggleOpen()}>
        <BracketSvg /> <span>menu</span>
      </div>
      <Link to="/">
        <img src="/logo.svg" alt="odisy" />
      </Link>
      <Link to="/contacts" className={styles.flex}>
        <span>contact us</span> <BracketSvg className={styles.left} />
      </Link>
    </nav>
  );
};
