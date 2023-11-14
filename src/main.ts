import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import 'prosemirror-view/style/prosemirror.css';
import './style.css';

const editor = document.querySelector('#editor');
if (!editor) {
  throw new Error('Could not find #editor');
}

const state = EditorState.create({
  schema
});

const view = new EditorView(editor, {
    state,
    dispatchTransaction: (transaction) => {
        console.log('Applying transaction...', transaction);
        const newState = view.state.apply(transaction);
        view.updateState(newState);
    },
});
