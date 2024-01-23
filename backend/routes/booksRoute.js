import { Book } from "../models/bookModel.js";
import express from 'express'
const router = express.Router()

// Save a book
router.post("/addBook", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "All feilds are required!!" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    res.status(200).send(book);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

// All books
router.get("/getBooks", async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length > 0) {
      res.status(200).json({
        count: books.length,
        books,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(400).send({ message: error.message });
  }
});

// get a single book by id
router.get("/getBook/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.find({ _id: id });
    console.log(book);
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: error.message });
  }
});

//update a book by id
router.put("/updateBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

//delete a book by id
router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Not Book Found!!" });
    }
    return res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});
export default router;
