import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const booksPath = path.resolve("db", "books.json");

function updateBooks(books) {
  return fs.writeFile(booksPath, JSON.stringify(books, null, 2));
}

export async function listBooks() {
  const buffer = await fs.readFile(booksPath);
  return JSON.parse(buffer);
}

export async function addBook(title, author, isBorrowed) {
  const books = await listBooks();
  const newBook = {
    isbn: nanoid(),
    title,
    author,
    isBorrowed,
  };
  books.push(newBook);
  await updateBooks(books);
  return newBook;
}
