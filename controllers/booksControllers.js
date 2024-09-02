import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import {
  addBook,
  getBookByQuery,
  listBooks,
  markBookByIsbn,
  removeBook,
  updateBookByIsbn,
} from "../services/booksServices.js";

const getAllBooks = async (req, res) => {
  const result = await listBooks();
  res.json(result);
};

const addNewBook = async (req, res) => {
  const { title, author, isbn } = req.body;
  const result = await addBook(title, author, isbn);
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

const markBook = async (req, res) => {
  const { isbn } = req.params;
  const { isBorrowed } = req.body;
  const result = await markBookByIsbn(isbn, isBorrowed);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

const searchBook = async (req, res) => {
  const query = req.query;
  console.log(req.query);
  const result = await getBookByQuery(query);
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
  markBook: ctrlWrapper(markBook),
  searchBook: ctrlWrapper(searchBook),
};
