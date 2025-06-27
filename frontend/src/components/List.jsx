// src/components/BookList.jsx
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi"; // optional: for icon in button

const BookList = ({ selectedCategory }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let url = "https://mernstackproject-production.up.railway.app";
    if (selectedCategory) url += `?category=${selectedCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, [selectedCategory]);

  return (
    <div className="bg-[#0f0f10] min-h-screen px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        Book Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-[#1c1c1e] border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300 flex flex-col"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-contain bg-white p-2 transition-transform duration-300 hover:scale-105"
            />

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">{book.title}</h3>
              <p className="text-sm text-gray-400 italic mb-1">by {book.author}</p>
              <p className="text-xs text-yellow-400 font-medium mb-3">{book.category}</p>

              <div className="mt-auto space-y-2">
                <p className="text-green-400 font-bold text-lg">Rs. {book.price}</p>

                {book.pdf && (
                  <a
                    href={book.pdf}
                    download
                    className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
                  >
                    <FiDownload className="text-lg" /> Download PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
