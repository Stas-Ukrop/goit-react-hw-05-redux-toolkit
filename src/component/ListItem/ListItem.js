import React from "react";

const ListItem = ({ mass, onDeleteTodo }) => {
  return (
    <ul>
      {mass !== undefined &&
        mass.map(({ id, text, number }) => {
          return (
            <li key={id}>
              <p> {text}:</p>
              <span> {number}</span>
              <button type="button" onClick={() => onDeleteTodo(id)}>
                Удалить
              </button>
            </li>
          );
        })}
    </ul>
  );
};
export default ListItem;
