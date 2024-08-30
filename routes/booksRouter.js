import express from "express";
import validateBody from "../helpers/validateBody.js";
import booksControllers from "../controllers/booksControllers.js";
import { addBookSchema } from "../schemas/booksSchemas.js";

const booksRouter = express.Router();
const { addNewBook } = booksControllers;

booksRouter.post("/", validateBody(addBookSchema), addNewBook);

export default booksRouter;
