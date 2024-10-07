import { Footer, Net } from "../../components";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <main className={`${styles.bg} container`}>
      <Net />
      <Footer />
    </main>
  );
};
