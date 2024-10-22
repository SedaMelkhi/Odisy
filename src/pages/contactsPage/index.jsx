import { useEffect, useState } from "react";
import { Net, Footer } from "../../components";
import { ContactsService } from "../../services";
import { SmallBracketSvg, BracketSvg } from "../../assets/svg";
import { Link } from "react-router-dom";

import styles from "./contactsPage.module.css";

export const ContactsPage = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const data = ContactsService.getContacts();
    data.then((res) => setContacts(res));
  }, []);

  return (
    <main className={`${styles.bg_container} container`}>
      <Net />
      <div className={styles.contacts}>
        <h1 className={styles.title}>
          <BracketSvg />
          <span>Contact us</span>
          <BracketSvg className={styles.left} />
        </h1>
        <div className={styles.item}>
          <div className={styles.name}>
            <SmallBracketSvg />
            <span>Contact</span>
            <SmallBracketSvg className={styles.left} />
          </div>
          <div className={styles.contact}>
            {contacts ? (
              <Link to={`mailto:${contacts.email}`}>{contacts.email}</Link>
            ) : (
              "..."
            )}
          </div>
          <div className={styles.contact}>
            {contacts ? (
              <Link to={`tel:${contacts.phone_number}`}>
                {contacts.phone_number}
              </Link>
            ) : (
              "..."
            )}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.name}>
            <SmallBracketSvg />
            <span>Social media</span>
            <SmallBracketSvg className={styles.left} />
          </div>
          {contacts && contacts.instagram_link && (
            <div className={styles.contact}>
              <Link to={contacts.instagram_link}>instagram</Link>
            </div>
          )}
          {contacts && contacts.telegram_link && (
            <div className={styles.contact}>
              <Link to={contacts.telegram_link} className={styles.contact}>
                telegram
              </Link>
            </div>
          )}
          {contacts && contacts.vimeo_link && (
            <div className={styles.contact}>
              <Link to={contacts.vimeo_link} className={styles.contact}>
                Vimeo
              </Link>
            </div>
          )}
        </div>
        <div className={styles.item}>
          <div className={styles.name}>
            <SmallBracketSvg />
            <span>office</span>
            <SmallBracketSvg className={styles.left} />
          </div>
          <div className={styles.contact}>
            {contacts ? contacts.address : "..."}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
};
