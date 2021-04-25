import shotid from "shortid";
import type from "./type";
import { createAction } from "@reduxjs/toolkit";

const addTodo = createAction(type.ADD, (text, number) => {
  return {
    payload: {
      id: shotid.generate(),
      text,
      number,
    },
  };
});
// const addTodo = (text, number) => ({
// type: type.ADD,
// payload: {
// id: shotid.generate(),
// text,
// number,
// },
// });
const deleteTodo = createAction(type.DELETE);
// const deleteTodo = (id) => ({
// type: type.DELETE,
// payload: id,
// });
const filter = createAction(type.FILTER);
// const filter = (text) => ({
// type: type.FILTER,
// payload: text,
// });

export default { addTodo, deleteTodo, filter };
