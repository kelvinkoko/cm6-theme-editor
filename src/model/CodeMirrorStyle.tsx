import HighlightStyleItem from "./HighlightStyleItem";
import SectionData from "./SectionData";

export interface CodeMirrorStyle {
  sections: SectionData[];
  highlights: HighlightStyleItem[];
}
