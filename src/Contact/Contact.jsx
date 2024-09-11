import s from "./Contsct.module.css";
import { TbPhone } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";

const Contact = ({ id, name, number, handelDeleteContact }) => {
  return (
    <li className={s.contact}>
      <div className={s.user}>
        <p>
          <FaUserLarge className={s.icon} />
          {name}
        </p>
        <p>
          <TbPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => handelDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;
