import { motion } from "framer-motion";
import { MenuItem } from "../menuItem/menuItem";

import { CloseSvg } from "../../../assets/svg";

import styles from "./NavContent.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const menuItems = [
  {
    text: "Commercials",
    link: "/commercials",
  },
  {
    text: "Features",
    link: "/features",
  },
  {
    text: "Doc",
    link: "/soon",
  },
  {
    text: "Creative",
    link: "/soon",
  },
  {
    text: "Education",
    link: "/soon",
  },
  {
    text: "Contacts",
    link: "/contacts",
  },
];

export const NavContent = ({ toggleOpen }) => (
  <>
    <motion.ul variants={variants} className={styles.close}>
      <motion.li variants={variants2} className={styles.item}>
        <div onClick={() => toggleOpen()} className={styles.close}>
          <CloseSvg />
        </div>
      </motion.li>
    </motion.ul>

    <motion.ul variants={variants} className={styles.menu}>
      {menuItems.map((item, i) => (
        <MenuItem key={i} item={item} toggleOpen={toggleOpen} />
      ))}
    </motion.ul>
  </>
);
