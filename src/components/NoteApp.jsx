import React, { Component } from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";
import NoteArchived from "./NoteArchived";
import { NoteInput } from "./NoteInput";

export class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      });
      return { notes: updatedNotes };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(keyword) {
    if (keyword.length !== 0 && keyword.trim() !== "") {
      const filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      );
      this.setState({
        notes: filteredNotes,
      });
    } else {
      this.setState({
        notes: getInitialData(),
      });
    }
  }

  render() {
    return (
      <div className="note-app">
        <Header onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NoteArchived
            notes={this.state.notes}
            showFormattedDate={showFormattedDate}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
