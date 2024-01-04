// import React, { Component } from "react";
// import { getArchivedNotes } from "../utils/local-data";
// import { NavLink } from "react-router-dom";
// import NoteList from "./NoteList";

// export class NoteArchived extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       archivedNotes: getArchivedNotes(),
//     };
//   }
//   render() {
//     return (
//       <section>
//         <h2 className="text-2xl mt-8">Catatan Aktif</h2>
//         <div className="mt-8">
//           <NoteList notes={this.state.notes} />
//         </div>
//         <NavLink
//           to="/add"
//           className="flex items-center text-lg py-2 px-4 gap-2 fixed bottom-12 right-4 md:right-8 lg:right-16 xl:right-40 bg-primary-900 hover:bg-primary-950 duration-300 border border-primary-400 rounded-xl"
//         >
//           <span>Catatan Baru</span>
//           <BiNote size={24} />
//         </NavLink>
//       </section>
//     );
//   }
// }

// export default NoteArchived;
