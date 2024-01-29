import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import {NavLink} from "react-router-dom";
import {BiNote} from "react-icons/bi";
import {useSearchParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import {getActiveNotes} from "../utils/api";

function HomePage() {
	const [searchParam, setSearchParam] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(() => {
		return searchParam.get("keyword") || "";
	});

	useEffect(() => {
		const fetchedActivedNotes = async () => {
			const {data} = await getActiveNotes();
			setNotes(data);
		};
		fetchedActivedNotes();
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
			<h2 className="text-2xl mt-8">Catatan Aktif</h2>
			<div className="mt-8">{notes.length !== 0 ? <NoteList notes={filteredNotes} /> : <p>Tidak ada catatan aktif</p>}</div>
			<NavLink to="/notes/new" className="flex items-center text-lg py-2 px-4 gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl">
				<span>Catatan Baru</span>
				<BiNote size={24} />
			</NavLink>
		</section>
	);
}

export default HomePage;
