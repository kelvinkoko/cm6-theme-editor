import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import DefaultStyle from "../model/DefaultStyle";

export interface ThemeState {
  style: CodeMirrorStyle;
}

const initialState: ThemeState = {
  style: DefaultStyle
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<CodeMirrorStyle>) => {
      state.style = action.payload;
    }
  }
});

export const { setStyle } = themeSlice.actions;

export default themeSlice.reducer;
