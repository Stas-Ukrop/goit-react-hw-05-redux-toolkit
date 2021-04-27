import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import todosActions from "../ListContact/reduxTodo/todo-action";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContactToRedux }) => {
  const [contact, setContact] = useState({
    nameContact: "",
    number: "",
  });
  const addContact = () => {
    if (contact.nameContact !== "" && contact.number !== "") {
      addContactToRedux(contact.nameContact, contact.number);
      setContact({
        nameContact: "",
        number: "",
      });
    } else {
      alert("Пожалуйста введите все данные в поля формы");
    }
  };

  return (
    <div className={styles.mainConteiner}>
      <div className={styles.conteiner}>
        <label>Input name</label>
        <input
          type="text"
          name="nameContact"
          value={contact.nameContact}
          onChange={(event) => {
            setContact((contact) => ({
              ...contact,
              [event.target.name]: event.target.value,
            }));
          }}
        ></input>
      </div>
      <div className={styles.conteiner}>
        <label>Input number</label>
        <input
          type="text"
          name="number"
          value={contact.number}
          onChange={(event) => {
            setContact((contact) => ({
              ...contact,
              [event.target.name]: event.target.value,
            }));
          }}
        ></input>
      </div>
      <button type="button" onClick={addContact} className={styles.button}>
        Добавить контакт
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addContactToRedux: (text, number) =>
    dispatch(todosActions.addTodo(text, number)),
});
export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContactToRedux: PropTypes.func,
};
