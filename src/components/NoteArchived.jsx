import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getArchivedNotes} from "../utils/local-data";
import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom";
import {BiNote} from "react-icons/bi";
import NoteList from "./NoteList";

const NoteArchived = () => {
	const [searchParam, setSearchParam] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(() => {
		return searchParam.get("keyword") || "";
	});

	useEffect(() => {
		const fetchedArchivedNotes = getArchivedNotes();
		setNotes(fetchedArchivedNotes);
	}, []);

	function onKeywordChangeHandler(keyword) {
		setKeyword(keyword);
		setSearchParam({keyword});
	}

	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	return (
		<section>
			<SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
			<h2 className="text-2xl mt-8">Arsip Catatan</h2>
			<div className="mt-8">{notes.length !== 0 ? <NoteList notes={filteredNotes} /> : <p>Tidak ada catatan diarsipkan</p>}</div>
			<NavLink to="/add" className="flex items-center text-lg py-2 px-4 gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl">
				<span>Catatan Baru</span>
				<BiNote size={24} />
			</NavLink>
		</section>
	);
};

export default NoteArchived;
