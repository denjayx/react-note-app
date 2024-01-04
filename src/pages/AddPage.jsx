import React, { Component } from "react";
import PropTypes from "prop-types";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddPageWrapper() {
  const navigate = useNavigate();
  const handleAddNote = (note) => {
    addNote(note);
    navigate(-1);
  };

  return <AddPage onNoteAdd={handleAddNote} />;
}

export class AddPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }

  handleTitleChange = (e) => {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  };

  handleInput = (e) => {
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  };

  handleSubmit = () => {
    const { title, body } = this.state;
    this.props.onNoteAdd({ title, body });
  };

  render() {
    return (
      <section>
        <div className="space-y-4 text-primary-50 xl:px-64 mt-4 lg:mt-14">
          <input
            onChange={this.handleTitleChange}
            placeholder="Masukkan Judul ..."
            className="w-full text-4xl text-wrap lg:text-6xl font-bold focus:border-0 outline-none bg-transparent rounded-none"
          />
          <div
            className="h-[50vh] editable focus:border-0 outline-none"
            onInput={this.handleInput}
            data-placeholder="Tuliskan Catatan Disini"
            contentEditable
          />
        </div>
        <button
          type="button"
          onClick={this.handleSubmit}
          className="flex items-center w-fit fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 text-lg py-2 px-4 gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl"
        >
          Selesai <BsFileEarmarkCheckFill />
        </button>
      </section>
    );
  }
}

AddPage.propTypes = {
  onNoteAdd: PropTypes.func.isRequired,
};

export default AddPageWrapper;
