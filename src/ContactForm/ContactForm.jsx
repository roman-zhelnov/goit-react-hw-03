import s from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div>
      <form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <input />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <input />
        </label>
        <button className={s.btn}>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
