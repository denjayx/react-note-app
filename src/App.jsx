import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import ArchivedPage from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <section className="min-h-screen">
      <header className="container py-6 lg:py-8">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-primary-50 text-3xl font-bold">
              Denjay's Note
            </h1>
          </Link>
          <Navbar />
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/archived" element={<ArchivedPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
