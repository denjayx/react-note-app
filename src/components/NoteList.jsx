import PropTypes from "prop-types";
import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({notes}) => {
	return (
		<div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
			{notes.map((note) => (
				<NoteItem key={note.id} {...note} />
			))}
		</div>
	);
};

export default NoteList;
