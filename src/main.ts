import { MarkdownExtension } from 'prosemirror-remark';
import { EditorState } from 'prosemirror-state';
import { ProseMirrorUnified } from 'prosemirror-unified';
import { EditorView } from 'prosemirror-view';
import 'prosemirror-view/style/prosemirror.css';
import './style.css';

const sourceMarkdown = "**Bold text**";
const pmu = new ProseMirrorUnified([new MarkdownExtension()]);

const view = new EditorView(
  document.querySelector("#editor")!,
  {
    state: EditorState.create({
      doc: pmu.parse(sourceMarkdown),
      plugins: [pmu.inputRulesPlugin(), pmu.keymapPlugin()],
      schema: pmu.schema(),
    }),
    dispatchTransaction: (tr): void => {
      view.updateState(view.state.apply(tr));
      console.log(pmu.serialize(view.state.doc));
    },
  }
);
