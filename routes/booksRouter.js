import express from "express";
import validateBody from "../helpers/validateBody.js";
import booksControllers from "../controllers/booksControllers.js";
import { addBookSchema } from "../schemas/booksSchemas.js";

const booksRouter = express.Router();
const { addNewBook, getAllBooks } = booksControllers;

booksRouter.post("/", validateBody(addBookSchema), addNewBook);
booksRouter.get("/", getAllBooks);

export default booksRouter;
