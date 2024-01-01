import React, {useState} from "react";

export const NoteInput = ({addNote}) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const maxTitleLength = 20;
	const maxBodyLength = 50;

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (title && body) {
			addNote({title, body});
			setTitle("");
			setBody("");
		} else {
			if (!title && body) {
				alert("Title tidak boleh kosong!");
			} else if (!body && title) {
				alert("Body tidak boleh kosong!");
			} else {
				alert("Title dan body tidak boleh kosong!");
			}
		}
	};

	const handleTitleChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue.length <= maxTitleLength) {
			setTitle(inputValue);
		}
	};

	const handleBodyChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue.length <= maxBodyLength) {
			setBody(inputValue);
		}
	};

	return (
		<div className="note-input">
			<h2>Buat Catatan</h2>
			<form onSubmit={onSubmitHandler}>
				<p className="note-input__title__char-limit">Sisa Karakter Judul: {maxTitleLength - title.length}</p>
				<input type="text" className="note-input__title" placeholder="Judul Catatan" value={title} onChange={handleTitleChange} />
				<p className="note-input__title__char-limit">Sisa Karakter Catatan: {maxBodyLength - body.length}</p>
				<textarea name="input-body" placeholder="Tuliskan Catatan Disini" cols="30" rows="10" className="note-input__body" value={body} onChange={handleBodyChange} />
				<button type="submit">Buat</button>
			</form>
		</div>
	);
};
