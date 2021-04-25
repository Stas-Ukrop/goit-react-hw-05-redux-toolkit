import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todoReducer from "../component/ListTodo/reduxTodo/todo-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];
const todosPersistConfig = {
  key: "todos",
  storage,
  blacklist: ["filter"],
};
const store = configureStore({
  reducer: {
    todos: persistReducer(todosPersistConfig, todoReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
