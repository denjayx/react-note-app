import PropTypes from "prop-types";
import React from "react";
import parse from "html-react-parser";
import {showFormattedDate} from "../utils";

const NoteDetail = ({title, body, createdAt}) => {
	return (
		<div className="space-y-4 text-primary-50 xl:px-64 mt-4 lg:mt-14">
			<h4 className="text-4xl lg:text-6xl font-bold">{title}</h4>
			<span className="block text-primary-200/50">{showFormattedDate(createdAt)}</span>
			<p>{parse(body)}</p>
		</div>
	);
};

export default NoteDetail;
