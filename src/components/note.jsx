import React from 'react';

class Note extends React.Component {
	render() {
		let { title, content} = this.props;

		return (
			<div>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{content}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Note;