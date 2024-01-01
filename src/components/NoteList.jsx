import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({notes, showFormattedDate, onDelete, onArchive}) => {
	return (
		<>
			<h2>Catatan Aktif</h2>
			<div className="notes-list">{notes.filter((note) => !note.archived).length === 0 ? <p>Tidak ada catatan</p> : notes.filter((note) => !note.archived).map((note) => <NoteItem className="notes-item" key={note.id} {...note} showFormattedDate={showFormattedDate} onDelete={onDelete} onArchive={onArchive} />)}</div>
		</>
	);
};

export default NoteList;
