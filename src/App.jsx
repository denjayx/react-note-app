/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';

function App() {
  return (
    <section>
      <header className="container py-6 lg:py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-primary-50 text-3xl font-bold">Denjay's Note</h1>
          <Navbar />
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
