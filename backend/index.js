// server/index.js
const express = require("express");
const cors = require("cors");
const books = require("./books");

const app = express();
app.use(cors());

app.get("/api/books", (req, res) => {
  const { category } = req.query;

  if (category) {
    const filtered = books.filter(book => book.category === category);
    res.json(filtered);
  } else {
    res.json(books);
  }
});

app.listen(5000, () => {
  console.log("Book store backend running on http://localhost:5000");
});
