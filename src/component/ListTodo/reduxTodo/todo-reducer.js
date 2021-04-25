import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./todo-action";
const items = createReducer([], {
  [action.addTodo]: (state, { payload }) => [...state, payload],
  [action.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const item = (state = [], { type, payload }) => {
// switch (type) {
// case types.ADD:
// return [...state, payload];
// case types.DELETE:
// return state.filter(({id})=>id!==payload);
// default:
// return state;
// }
// };
const filter = createReducer("", {
  [action.filter]: (state, { payload }) => payload,
});
// const filter = (state = "", { type, payload }) => {
// switch (type) {
// case types.FILTER:
// return payload;
// default:
// return state;
// }
// };
export default combineReducers({
  items,
  filter,
});
