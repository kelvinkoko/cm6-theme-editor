
import { EditorView } from '@codemirror/view'

export const basicDark = EditorView.theme(
    {
    "&": {
        "height": "80%",
        "width": "80%",
        "boxShadow": "0px 2px 4px rgba(0, 0, 0, 0.25);",
        "backgroundColor": "#ca5050",
        "color": "#000000"
    },
    ".cm-scroller": {
        "overflow": "auto"
    },
    ".cm-wrap": {
        "height": "100%"
    }
}
)
