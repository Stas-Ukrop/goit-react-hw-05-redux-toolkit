import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import { connect } from "react-redux";
import todosActions from "./reduxTodo/todo-action";
import ContactForm from "../ContactForm";
import styles from "./ListContact.module.css";
import PropTypes from "prop-types";

const ListContact = ({ massOfContacts, onDelete, onFilter }) => {
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    onFilter(filterText);
  }, [filterText]);

  return (
    <div className="blockText">
      <input
        type="text"
        className={styles.inputTextFilter}
        placeholder="фильт"
        onChange={(e) => {
          setFilterText(e.currentTarget.value);
        }}
      ></input>
      <ContactForm />
      <ListItem mass={massOfContacts} onDelete={onDelete} />
    </div>
  );
};

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  massOfContacts: getVisibleTodos(items, filter),
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(todosActions.deleteTodo(id)),
  onFilter: (text) => dispatch(todosActions.filter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContact);

ListContact.propTypes = {
  massOfContacts: PropTypes.array,
  onDelete: PropTypes.func,
  onFilter: PropTypes.func,
};
