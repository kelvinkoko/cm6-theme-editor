import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { Color } from "./model/Color";
import { RootState } from "./store/Store";
import { setStyle } from "./store/ThemeSlice";
import Section from "./ui/Section";
import StyleItem from "./ui/StyleItem";

const LeftMenu = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const dispatch = useDispatch();
  return (
    <div className={styles.leftMenu}>
      {cmStyle.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} title={section.title}>
          {section.items.map((style, itemIndex) => (
            <StyleItem
              key={itemIndex}
              title={style.name}
              initialColor={style.color}
              setColor={(color: Color) => {
                const newStyleInThisSection = {
                  ...section,
                  items: updateArray(section.items, itemIndex, {
                    ...style,
                    color
                  })
                };
                const newStyle = {
                  ...cmStyle,
                  sections: updateArray(
                    cmStyle.sections,
                    sectionIndex,
                    newStyleInThisSection
                  )
                };
                dispatch(setStyle(newStyle));
              }}
            />
          ))}
        </Section>
      ))}
    </div>
  );
};

// Update a readonly array with index and object as input
// Return a new array with the updated object
const updateArray = (array: readonly any[], index: number, object: any) => {
  const newArray = [...array];
  newArray[index] = object;
  return newArray;
};

export default LeftMenu;
