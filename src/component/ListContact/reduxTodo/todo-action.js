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

const deleteTodo = createAction(type.DELETE);

const filter = createAction(type.FILTER);

export default { addTodo, deleteTodo, filter };
