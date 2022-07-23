import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { Color } from "../model/Color";
import DefaultStyle from "../model/DefaultStyle";
import { updateArray } from "../utils/ObjectUtils";

export interface ThemeState {
  style: CodeMirrorStyle;
}

interface StyleColorPairs {
  sectionItems: { [index: string]: Color };
  highlights: { [index: string]: Color };
}

const parseStyleFromStorage = (pairs: StyleColorPairs): CodeMirrorStyle => {
  let style = DefaultStyle;
  for (
    let sectionIndex = 0;
    sectionIndex < style.sections.length;
    sectionIndex++
  ) {
    const section = style.sections[sectionIndex];
    for (let itemIndex = 0; itemIndex < section.items.length; itemIndex++) {
      const item = section.items[itemIndex];
      const color = pairs.sectionItems[section.title + item.name];
      if (color) {
        style = {
          ...style,
          sections: updateArray(style.sections, sectionIndex, {
            ...style.sections[sectionIndex],
            items: updateArray(style.sections[sectionIndex].items, itemIndex, {
              ...item,
              color
            })
          })
        };
      }
    }
  }
  for (let itemIndex = 0; itemIndex < style.highlights.length; itemIndex++) {
    const item = style.highlights[itemIndex];
    const color = pairs.highlights[item.name];
    if (color) {
      style = {
        ...style,
        highlights: updateArray(style.highlights, itemIndex, {
          ...item,
          color
        })
      };
    }
  }
  return style;
};

const saveColorPairsToStorage = (style: CodeMirrorStyle) => {
  const pairs: StyleColorPairs = {
    sectionItems: {},
    highlights: {}
  };
  for (
    let sectionIndex = 0;
    sectionIndex < style.sections.length;
    sectionIndex++
  ) {
    const section = style.sections[sectionIndex];
    for (let itemIndex = 0; itemIndex < section.items.length; itemIndex++) {
      const item = section.items[itemIndex];
      pairs.sectionItems[section.title + item.name] = item.color;
    }
  }
  for (let itemIndex = 0; itemIndex < style.highlights.length; itemIndex++) {
    const item = style.highlights[itemIndex];
    pairs.highlights[item.name] = item.color;
  }
  localStorage.setItem("style", JSON.stringify(pairs));
};

const getInitialStyle = (): CodeMirrorStyle => {
  const colorPairs = localStorage.getItem("style");
  if (colorPairs) {
    return parseStyleFromStorage(JSON.parse(colorPairs));
  }
  return DefaultStyle;
};

const initialState: ThemeState = {
  style: getInitialStyle()
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<CodeMirrorStyle>) => {
      state.style = action.payload;
      saveColorPairsToStorage(state.style);
    }
  }
});

export const { setStyle } = themeSlice.actions;

export default themeSlice.reducer;
