import React, { useState } from 'react';
import Note from 'components/note';

const NoteList = () => {
	const [list, setList] = useState("");
	let notesList = [];

	for( let i = 0; i < localStorage.length; i++){
		let note = {
			title: localStorage.key(i),
			content: localStorage.getItem(localStorage.key(i))
		}
		notesList.push(note);
	};

	let notes = notesList.map((note) => (
		<Note
			title={note.title}
			content={note.content}
		/>
	));

	return (notes);
};

export default NoteList;