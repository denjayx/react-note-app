import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";
import { NavLink } from "react-router-dom";
import { BiNote } from "react-icons/bi";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }
  render() {
    return (
      <section>
        <SearchBar />
        <h2 className="text-2xl mt-8">Catatan Aktif</h2>
        <div className="mt-8">
          {this.state.notes.length !== 0 ? (
            <NoteList notes={this.state.notes} />
          ) : (
            <p>Tidak ada catatan</p>
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

export default HomePage;
