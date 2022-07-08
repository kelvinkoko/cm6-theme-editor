import * as React from "react";
import CodeMirror from "../codemirror/CodeMirror";
import { CodeMirrorStyle } from "../model/CodeMirrorStyle";
import { TEMPLATE_JS } from "../model/TemplateString";

type PreviewProps = {
  cmStyle: CodeMirrorStyle;
};

const Preview = ({ cmStyle }: PreviewProps) => {
  return <CodeMirror style={cmStyle} initialValue={TEMPLATE_JS} />;
};

export default Preview;
