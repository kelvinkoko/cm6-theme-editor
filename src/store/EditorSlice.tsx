import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Page } from "../model/Page";

export interface EditorState {
  page: Page;
}

const initialState: EditorState = {
  page: Page.Preview
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    }
  }
});

export const { setPage } = editorSlice.actions;

export default editorSlice.reducer;
