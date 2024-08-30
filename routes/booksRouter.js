import express from "express";
import validateBody from "../helpers/validateBody.js";
import booksControllers from "../controllers/booksControllers.js";
import {
  addBookSchema,
  markBookSchema,
  updateBookSchema,
} from "../schemas/booksSchemas.js";

const booksRouter = express.Router();
const {
  addNewBook,
  getAllBooks,
  updateBook,
  deleteBook,
  markBook,
  searchBook,
} = booksControllers;

booksRouter.post("/", validateBody(addBookSchema), addNewBook);
booksRouter.get("/", getAllBooks);
booksRouter.put("/:isbn", validateBody(updateBookSchema), updateBook);
booksRouter.delete("/:isbn", deleteBook);
booksRouter.patch("/:isbn/borrow", validateBody(markBookSchema), markBook);
booksRouter.get("/search", searchBook);

export default booksRouter;
