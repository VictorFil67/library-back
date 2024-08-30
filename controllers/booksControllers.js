import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { addBook } from "../services/booksServices.js";

const addNewBook = async (req, res) => {
  const { title, author, isBorrowed } = req.body;
  const result = await addBook(title, author, isBorrowed);
  res.status(201).json(result);
};

export default {
  addNewBook: ctrlWrapper(addNewBook),
};
