import { configureStore } from "@reduxjs/toolkit";
import editorReducer from "./EditorSlice";
import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: { editor: editorReducer, theme: themeReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
