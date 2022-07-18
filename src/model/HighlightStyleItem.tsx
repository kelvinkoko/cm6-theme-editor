import { Tag } from "@lezer/highlight";
import { Color } from "./Color";

export default interface HighlightStyleItem {
  name: string;
  tags: Tag[];
  color: Color;
}
