import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { addBook, listBooks } from "../services/booksServices.js";

const getAllBooks = async (req, res) => {
  const result = await listBooks();
  res.json(result);
};

const addNewBook = async (req, res) => {
  const { title, author, isBorrowed } = req.body;
  const result = await addBook(title, author, isBorrowed);
  res.status(201).json(result);
};

export default {
  getAllBooks: ctrlWrapper(getAllBooks),
  addNewBook: ctrlWrapper(addNewBook),
};
