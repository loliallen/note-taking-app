import { BlockNoteEditor } from "@blocknote/core";
import {
	BlockNoteView,
	useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";

export type NoteProps = {
	data?: Partial<Parameters<typeof useBlockNote>>;
};
export const Note = ({ data }: NoteProps) => {
	const editor: BlockNoteEditor | null = useBlockNote({
		theme: "dark",
        editorDOMAttributes: {
            class: 'bg-container-500'
        }
	});

	// Renders the editor instance using a React component.
	return <BlockNoteView editor={editor} />;
};
