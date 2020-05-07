import React, { useState } from 'react';
import MarkdownInput from 'components/markdown_input';
import NoteDisplay from 'components/note_display';
import NoteList from 'components/note_list';

const App = () => {
	const [note, setNote] = useState({});
	const [stored, setStored] = useState({});

	return (
		<div className='App'>
			<div className='split right'>
				<div className='topright'>
					<NoteDisplay title={note.title} content={note.content} />
				</div>
				<div className='bottomright'>
					<MarkdownInput
						getNote={(input) => setNote(input)}
						getStored={(title, content) => setStored({
							title: title,
							content: content
						})}
					/>
					<p>{stored.title} {stored.content}</p>
				</div>
			</div>
			<div className='split left'>
				<NoteList />
			</div>
		</div>
	);
}

export default App;