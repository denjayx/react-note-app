import {FiLogOut} from "react-icons/fi";
import React from "react";
import {BsFillArchiveFill} from "react-icons/bs";
import {Link} from "react-router-dom";

function Navbar({logout}) {
	return (
		<section>
			<Link to="/archived" className="flex items-center text-sm gap-2 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 py-2 px-4 rounded-lg">
				<span>Terarsip</span>
				<BsFillArchiveFill />
			</Link>
			<button onClick={logout}>
				<FiLogOut />
			</button>
		</section>
	);
}

export default Navbar;
