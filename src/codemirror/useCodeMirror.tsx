import { basicSetup, EditorState, EditorView } from "@codemirror/basic-setup";
import { Extension } from "@codemirror/state";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useCodeMirror(extensions: Extension[]) {
  const [element, setElement] = useState<HTMLElement>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!element) return;

    const view = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, ...extensions]
      }),
      parent: element
    });
    viewRef.current = view;
    return () => view?.destroy();
  }, [element]);

  return { ref, viewRef };
}
