import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import { Color } from "./model/Color";
import { RootState } from "./store/Store";
import { setStyle } from "./store/ThemeSlice";
import Section from "./ui/Section";
import StyleItem from "./ui/StyleItem";
import { updateArray } from "./utils/ObjectUtils";

const LeftMenu = () => {
  const cmStyle = useSelector((state: RootState) => state.theme.style);
  const dispatch = useDispatch();

  const syntaxSectionKey = cmStyle.sections.length;
  return (
    <div className={styles.leftMenu}>
      {cmStyle.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex} title={section.title}>
          {section.items.map((style, itemIndex) => (
            <StyleItem
              className={styles.styleItem}
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
      <Section key={syntaxSectionKey} title={"Syntax"}>
        {cmStyle.highlights.map((style, itemIndex) => (
          <StyleItem
            className={styles.styleItem}
            key={itemIndex}
            title={style.name}
            initialColor={style.color}
            setColor={(color: Color) => {
              const newHighlightStyle = {
                ...style,
                color
              };
              const newStyle = {
                ...cmStyle,
                highlights: updateArray(
                  cmStyle.highlights,
                  itemIndex,
                  newHighlightStyle
                )
              };
              dispatch(setStyle(newStyle));
            }}
          />
        ))}
      </Section>
    </div>
  );
};

export default LeftMenu;
