/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <header className="container py-4 lg:py-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-primary-50 text-3xl font-bold">Denjay's Note</h1>
        <NavLink to="/archived" className="flex items-center text-sm gap-2 bg-primary-900 border border-primary-50 py-2 px-4 rounded-lg">
          <span>Arsip Catatan</span>
          <BsFillArchiveFill />
        </NavLink>
      </nav>
    </header>
  );
}

export default App;
