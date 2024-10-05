import { Footer, Nav, Net } from "../../components";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <main className={`${styles.bg} container`}>
      <Net />
      <Nav />
      <Footer />
    </main>
  );
};
