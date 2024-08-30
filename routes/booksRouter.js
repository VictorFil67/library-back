import express from "express";
import validateBody from "../helpers/validateBody.js";
import booksControllers from "../controllers/booksControllers.js";
import { addBookSchema, updateBookSchema } from "../schemas/booksSchemas.js";

const booksRouter = express.Router();
const { addNewBook, getAllBooks, updateBook, deleteBook } = booksControllers;

booksRouter.post("/", validateBody(addBookSchema), addNewBook);
booksRouter.get("/", getAllBooks);
booksRouter.put("/:isbn", validateBody(updateBookSchema), updateBook);
booksRouter.delete("/:isbn", deleteBook);

export default booksRouter;
