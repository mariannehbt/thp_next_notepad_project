import React, { useState, useEffect } from 'react';

const MarkdownInput = ({ getNote }) => {
	const [input, setInput] = useState({});

	const handleChange = (event) => {
		setInput({
			...input,
			[event.currentTarget.name]: event.currentTarget.value
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`*Saved* ${input.title} : ${input.content}`);
		getNote(input);
	};

	useEffect(() => {
		console.log(input);
	}, [input]);

	return (
		<form>
			<div>
				<label>Titre :</label>
				<input name='title' type='text' onChange={handleChange} />
			</div>
			<div>
				<label>Contenu :</label>
				<textarea name='content' onChange={handleChange} />
			</div>
			 <button onClick={handleSubmit}>Sauvegarder</button>
		</form>
	);
};

export default MarkdownInput;