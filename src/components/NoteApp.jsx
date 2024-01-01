import React, {Component} from "react";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import {getInitialData, showFormattedDate} from "../utils";
import NoteArchived from "./NoteArchived";

export class NoteApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
		};
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({notes});
	}

	onArchiveHandler(id) {
		this.setState((prevState) => {
			const updatedNotes = prevState.notes.map((note) => {
				if (note.id === id) {
					return {...note, archived: !note.archived};
				}
				return note;
			});
			return {notes: updatedNotes};
		});
	}

	render() {
		return (
			<div className="note-app">
				<Header />
				<div className="note-app__body">
					<NoteInput />
					<NoteList notes={this.state.notes} showFormattedDate={showFormattedDate} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
					<NoteArchived notes={this.state.notes} showFormattedDate={showFormattedDate} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
				</div>
			</div>
		);
	}
}

export default NoteApp;
