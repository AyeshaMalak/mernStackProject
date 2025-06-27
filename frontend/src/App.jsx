// src/App.jsx
import { useState } from "react";
import Filter from "./components/Filter";
import List from "./components/List";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      
      {/* Header */}
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          📚 Explore Your Next Read
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-400">
          Curated collection of books, sorted by what inspires you
        </p>
      </header>

      {/* Filter */}
      <div className="px-4 sm:px-6 pb-6 max-w-5xl mx-auto w-full">
        <Filter onFilterChange={setCategory} />
      </div>

      {/* Book List */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
        <List selectedCategory={category} />
      </main>

      {/* Footer */}
      <footer className="text-center py-4 mt-auto bg-gray-900 text-gray-400 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Developed by Ayesha Malak
      </footer>
    </div>
  );
}

export default App;
