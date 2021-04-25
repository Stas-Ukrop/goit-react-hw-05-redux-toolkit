import React, { useState, useEffect } from "react";
import "./ListTodo.module.css";
import ListItem from "../ListItem";
import { connect } from "react-redux";
import todosActions from "./reduxTodo/todo-action";
import ContactForm from "../ContactForm";

const ListTodo = ({ todos, onDeleteTodo, onFilter }) => {
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    onFilter(filterText);
  }, [filterText]);

  return (
    <div className="blockText">
      <input
        type="text"
        className="inputText"
        placeholder="фильт"
        onChange={(e) => {
          setFilterText(e.currentTarget.value);
        }}
      ></input>
      <ContactForm />
      <ListItem mass={todos} onDeleteTodo={onDeleteTodo} />
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
  todos: getVisibleTodos(items, filter),
});
const mapDispatchToProps = (dispatch) => ({
  onDeleteTodo: (id) => dispatch(todosActions.deleteTodo(id)),
  onFilter: (text) => dispatch(todosActions.filter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
