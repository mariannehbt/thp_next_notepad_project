import React, { useState } from 'react';
import MarkdownInput from 'components/markdown_input';
import NoteDisplay from 'components/note_display';

const App = () => {
	const [note, setNote] = useState({});

	return (
		<div>
			<NoteDisplay />
			<MarkdownInput getNote={(input) => setNote(input)} />
			<p>{note.title} {note.content}</p>
		</div>
	);
}

export default App;