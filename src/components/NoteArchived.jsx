import React from "react";
import NoteItem from "./NoteItem";

const NoteArchived = ({notes, showFormattedDate, onDelete, onArchive}) => {
	return (
		<div>
			<h2>Catatan Diarsipkan</h2>
			<div className="notes-list">{notes.filter((note) => note.archived).length === 0 ? <p>Tidak ada catatan diarsipkan</p> : notes.filter((note) => note.archived).map((note) => <NoteItem className="notes-item" key={note.id} {...note} showFormattedDate={showFormattedDate} onDelete={onDelete} onArchive={onArchive} />)}</div>
		</div>
	);
};

export default NoteArchived;
