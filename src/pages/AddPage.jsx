import React, {useState} from "react";
import {BsFileEarmarkCheckFill} from "react-icons/bs";
import {addNote} from "../utils/local-data";
import {useNavigate} from "react-router-dom";

const AddPage = () => {
	const [noteInput, setNoteInput] = useState({
		title: "",
		body: "",
	});

	const navigate = useNavigate();

	const handleTitleChange = (e) => {
		setNoteInput((prevState) => ({
			...prevState,
			title: e.target.value,
		}));
	};

	const handleInput = (e) => {
		setNoteInput((prevState) => ({
			...prevState,
			body: e.target.innerHTML,
		}));
	};

	const handleSubmit = () => {
		const {title, body} = noteInput;
		addNote({title, body});
		navigate(-1);
	};

	return (
		<section>
			<div className="space-y-4 text-primary-50 xl:px-64 mt-4 lg:mt-14">
				<input onChange={handleTitleChange} placeholder="Masukkan Judul ..." className="w-full text-4xl text-wrap lg:text-6xl font-bold focus:border-0 outline-none bg-transparent rounded-none" />
				<div className="h-[50vh] editable focus:border-0 outline-none" onInput={handleInput} data-placeholder="Tuliskan Catatan Disini" contentEditable />
			</div>
			<button type="button" onClick={handleSubmit} className="flex items-center w-fit fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 text-lg py-2 px-4 gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl">
				Selesai <BsFileEarmarkCheckFill />
			</button>
		</section>
	);
};

export default AddPage;
