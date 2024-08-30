import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import {
  addBook,
  listBooks,
  removeBook,
  updateBookByIsbn,
} from "../services/booksServices.js";

const getAllBooks = async (req, res) => {
  const result = await listBooks();
  res.json(result);
};

const addNewBook = async (req, res) => {
  const { title, author, isBorrowed } = req.body;
  const result = await addBook(title, author, isBorrowed);
  res.status(201).json(result);
};

const updateBook = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    console.log(Object.keys(req.body).length);
    throw HttpError(400, "Body must have at least one field");
  }
  const { isbn } = req.params;
  const result = await updateBookByIsbn(isbn, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const deleteBook = async (req, res) => {
  const { isbn } = req.params;
  const result = await removeBook(isbn);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};
export default {
  getAllBooks: ctrlWrapper(getAllBooks),
  addNewBook: ctrlWrapper(addNewBook),
  updateBook: ctrlWrapper(updateBook),
  deleteBook: ctrlWrapper(deleteBook),
};
