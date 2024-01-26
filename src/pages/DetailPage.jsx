import {MdArchive, MdUnarchive, MdDelete} from "react-icons/md";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {archiveNote, deleteNote, getNote, unarchiveNote} from "../utils/local-data";
import NoteDetail from "../components/NoteDetail";
import {useNavigate} from "react-router-dom";

function DetailPage() {
	const [note, setNote] = useState(null);
	const {id} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchedNote = getNote(id);
		setNote(fetchedNote);
	}, [id]);

	const onArchive = () => {
		archiveNote(id);
		navigate(-1);
	};

	const onUnarchive = () => {
		unarchiveNote(id);
		navigate(-1);
	};

	const onDelete = () => {
		deleteNote(id);
		navigate(-1);
	};

	if (!note) {
		return <div>Loading...</div>;
	}

	return (
		<section>
			<NoteDetail title={note.title} body={note.body} createdAt={note.createdAt} />
			<div className="flex flex-col items-end gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40">
				<button type="button" onClick={onDelete} className="flex items-center w-fit text-lg py-2 px-4 gap-2 bg-red-800 hover:bg-red-950 duration-300 border border-red-400 rounded-xl">
					Hapus <MdDelete size={24} />
				</button>
				{!note.archived ? (
					<button type="button" onClick={onArchive} className="flex items-center w-fit text-lg py-2 px-4 gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl">
						Arsipkan <MdArchive size={24} />
					</button>
				) : (
					<button type="button" onClick={onUnarchive} className="flex items-center w-fit text-lg py-2 px-4 gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl">
						Buka Arsip <MdUnarchive size={24} />
					</button>
				)}
			</div>
		</section>
	);
}

export default DetailPage;
