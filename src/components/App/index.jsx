import React, { useState } from 'react';
import MarkdownInput from 'components/MarkdownInput';
import NoteDisplay from 'components/NoteDisplay';

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