import React, { useState, useEffect } from 'react';

const MarkdownInput = ({ getNote, getStored }) => {
	const [input, setInput] = useState({});

	const handleChange = (event) => {
		setInput({
			...input,
			[event.currentTarget.name]: event.currentTarget.value
		});
	}

	useEffect(() => {
		getNote(input);
		console.log(input);
	}, [input]);

	const handleSubmit = (event) => {
		event.preventDefault();
		localStorage.setItem(input.title, JSON.stringify(input.content));
		console.log(`*Saved* ${input.title} : ${input.content}`);
		console.log(input);
		console.log(localStorage);
		const storedContent = JSON.parse(localStorage.getItem(input.title));
		console.log(`*Stored* = ${storedContent}`);
		getStored(input.title, storedContent);	
	};

	return (
		<form>
			<div>
				<input name='title' type='text' onChange={handleChange} className='form-control' />
			</div>
			<div>
				<textarea name='content' onChange={handleChange} className='form-control' rows='10'/>
			</div>
			<div>
				<button onClick={handleSubmit} className='btn btn-danger'>Sauvegarder</button>
			</div>
		</form>
	);
};

export default MarkdownInput;