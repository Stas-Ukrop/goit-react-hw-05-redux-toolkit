import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import todosActions from "../ListTodo/reduxTodo/todo-action";

const ContactForm = ({ addContactToRedux }) => {  
  const [contact, setContact] = useState({
    nameContact: "",
    number: "",
  });
  const addContact = () => {
    if (contact.nameContact !== "" && contact.number !== "") {
      addContactToRedux(contact.nameContact, contact.number);
    } else {
      alert("Пожалуйста введите все данные в поля формы");
    }
  };
  //   const addContact = () => {
  //
  //   addContacts((contact.id = uuidv4()), contact.nameContact, contact.number);
  //   setContact({ id: "", nameContact: "", number: "" });
  //   for (let i = 0; i < inputText.length; i++) {
  // inputText[i].value = "";
  //   }
  // } else {
  //   alert("Пожалуйста введите все данные в поля формы");
  // }
  //   };
  return (
    <div>
      <label>Input name</label>
      <br />
      <input
        type="text"
        name="nameContact"
        onChange={(event) => {
          setContact((contact) => ({
            ...contact,
            [event.target.name]: event.target.value,
          }));
        }}
      ></input>
      <br />
      <label>Input number</label>
      <br />
      <input
        type="text"
        name="number"
        onChange={(event) => {
          setContact((contact) => ({
            ...contact,
            [event.target.name]: event.target.value,
          }));
        }}
      ></input>
      <br />
      <button type="button" onClick={addContact}>
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
  addContacts: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
