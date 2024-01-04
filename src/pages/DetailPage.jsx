import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { archiveNote, getNote } from "../utils/local-data";
import { MdArchive } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const onArchive = () => {
    archiveNote(id);
    navigate("/");
  };

  return <DetailPage id={id} onArchive={onArchive} />;
}

export class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    const { onArchive } = this.props;
    return (
      <section>
        <NoteDetail {...this.state.note} />
        <div className="flex flex-col items-end gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40">
          <button
            type="button"
            className="flex items-center w-fit text-lg py-2 px-4 gap-2 bg-red-800 hover:bg-red-950 duration-300 border border-red-400 rounded-xl"
          >
            Hapus <MdDelete size={24} />
          </button>
          <button
            type="button"
            onClick={onArchive}
            className="flex items-center w-fit text-lg py-2 px-4 gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl"
          >
            Arsipkan <MdArchive size={24} />
          </button>
        </div>
      </section>
    );
  }
}

export default DetailPageWrapper;
