import { Top } from "./top/top";
import { useState } from "react";
import { HiddenGardenPage } from "../hiddenGardenPage";
import { Project } from "./project/project";

import styles from "./commercialsPage.module.css";

export const CommercialsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.bg}>
      <Top setIsOpen={setIsOpen} />
      <div className={styles.grid}>
        <Project />
      </div>
      <HiddenGardenPage setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
