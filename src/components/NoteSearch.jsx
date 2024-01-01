import React, {Component} from "react";

export class NoteSearch extends Component {
	render() {
		return (
			<div className="note-search">
				<input type="text" placeholder="Cari Catatan" />
			</div>
		);
	}
}

export default NoteSearch;
