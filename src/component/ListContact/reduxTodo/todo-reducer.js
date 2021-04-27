import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./todo-action";
const items = createReducer([], {
  [action.addTodo]: (state, action) => includesContacts(state, action),
  [action.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filter]: (state, { payload }) => payload,
});

const includesContacts = (array, contact) => {
  const includeContacts = array.map((item) => item.text);
  if (includeContacts.includes(contact.payload.text)) {
    alert(`${contact.payload.text} phone number  is  already in contacts`);
    return array;
  }
  return [...array, contact.payload];
};
export default combineReducers({
  items,
  filter,
});
