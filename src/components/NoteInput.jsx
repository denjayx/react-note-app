import React, {Component} from "react";

export class NoteInput extends Component {
	render() {
		return (
			<div className="note-input">
				<h2>Buat Catatan</h2>
				<form action="">
					<p className="note-input__title__char-limit">Sisa Karakter : 50</p>
					<input type="text" className="note-input__title" placeholder="Judul Catatan" />
					<textarea name="input-body" placeholder="Tuliskan Catatan Disini" id="" cols="30" rows="10" className="note-input__body"></textarea>
					<button type="submit">Buat</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;
