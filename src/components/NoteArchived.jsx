import PropTypes from "prop-types";
import React, { Component } from "react";
import { getArchivedNotes } from "../utils/local-data";
import { NavLink } from "react-router-dom";
import NoteList from "../components/NoteList";
import { BiNote } from "react-icons/bi";
import SearchBar from "../components/SearchBar";

export class NoteArchived extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  };
  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h2 className="text-2xl mt-8">Arsip Catatan</h2>
        <div className="mt-8">
          {notes.length !== 0 ? (
            <NoteList notes={notes} />
          ) : (
            <p>Tidak ada catatan diarsipkan</p>
          )}
        </div>
        <NavLink
          to="/add"
          className="flex items-center text-lg py-2 px-4 gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl"
        >
          <span>Catatan Baru</span>
          <BiNote size={24} />
        </NavLink>
      </section>
    );
  }
}

export default NoteArchived;
