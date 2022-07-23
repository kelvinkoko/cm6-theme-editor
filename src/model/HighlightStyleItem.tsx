import { Tag } from "@lezer/highlight";
import { Color } from "./Color";

export default interface HighlightStyleItem {
  name: string;
  tags: Tag[];
  // TODO: Better way to avoid duplication of tags and tagInString for export
  tagsInString: string;
  color: Color;
}
