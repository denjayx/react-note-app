import PropTypes from "prop-types";
import React from "react";
import parse from "html-react-parser";
import {showFormattedDate} from "../utils";
import {Link} from "react-router-dom";

const NoteItem = ({id, title, createdAt, body}) => {
	return (
		<Link to={`/notes/${id}`}>
			<h4 className="text-2xl font-bold">{title}</h4>
			<span className="text-primary-200/50">{showFormattedDate(createdAt)}</span>
			<p>{parse(body)}</p>
		</Link>
	);
};

export default NoteItem;
