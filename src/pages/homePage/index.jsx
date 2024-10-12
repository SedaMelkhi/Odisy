import { Footer, Net } from "../../components";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <main className={`${styles.bg} container`}>
      <video autoPlay loop muted className={styles.bg}>
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Net />
      <Footer />
    </main>
  );
};
