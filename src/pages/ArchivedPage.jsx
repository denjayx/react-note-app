import React from "react";
import {useSearchParams} from "react-router-dom";
import NoteArchived from "../components/NoteArchived";

const ArchivedPage = () => {
	const [searchParam, setSearchParam] = useSearchParams();
	const keyword = searchParam.get("keyword") || "";

	function changeSearchParam(keyword) {
		setSearchParam({keyword});
	}

	return <NoteArchived defaultKeyword={keyword} keywordChange={changeSearchParam} />;
};

export default ArchivedPage;
