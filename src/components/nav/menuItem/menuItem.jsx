import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BracketSvg } from "../../../assets/svg";

import styles from "./menuItem.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  return (
    <motion.li variants={variants} className={styles.item}>
      <Link to={item.link} className={styles.flex}>
        <BracketSvg />
        <span>{item.text}</span>
        <BracketSvg className={styles.right} />
      </Link>
    </motion.li>
  );
};
