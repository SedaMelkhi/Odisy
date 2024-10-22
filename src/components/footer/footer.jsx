import { useEffect, useState } from "react";
import { ContactsService } from "../../services";

import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const data = ContactsService.getContacts();
    data.then((res) => setContacts(res));
  }, []);
  return (
    <footer className={styles.flex}>
      <div>©MMXXIV</div>
      <div>
        <Link to={contacts?.instagram_link ? contacts.instagram_link : ""}>
          instagram
        </Link>
      </div>
    </footer>
  );
};
