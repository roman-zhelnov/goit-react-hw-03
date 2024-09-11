import { useState } from "react";
import s from "./ContactList.module.css";
import contactsDate from "../contacts.json";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const [contact, setContact] = useState(contactsDate);

  const handelDeleteContact = (id) => {
    setContact((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ul className={s.contactList}>
      {contact.map((item) => (
        <Contact
          key={item.id}
          {...item}
          handelDeleteContact={handelDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
