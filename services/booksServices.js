import fs from "fs/promises";
import path from "path";

const booksPath = path.resolve("db", "books.json");

function updateBooks(books) {
  return fs.writeFile(booksPath, JSON.stringify(books, null, 2));
}

export async function listBooks() {
  const buffer = await fs.readFile(booksPath);
  return JSON.parse(buffer);
}

export async function addBook(title, author, isbn) {
  const books = await listBooks();
  const newBook = {
    isbn,
    title,
    author,
  };
  books.push(newBook);
  await updateBooks(books);
  return newBook;
}

export async function updateBookByIsbn(bookIsbn, data) {
  const books = await listBooks();
  const index = books.findIndex((item) => item.isbn === bookIsbn);
  if (index === -1) {
    return null;
  }
  books[index] = { ...books[index], ...data };
  await updateBooks(books);
  return books[index];
}

export async function getBookByIsbn(bookIsbn) {
  const books = await listBooks();
  const result = books.find((item) => item.isbn === bookIsbn);
  return result || null;
}

export async function removeBook(bookIsbn) {
  const books = await listBooks();
  const index = books.findIndex((item) => item.isbn === bookIsbn);
  if (index === -1) {
    return null;
  }
  const [deletedBook] = books.splice(index, 1);
  await updateBooks(books);
  return deletedBook;
}

export async function markBookByIsbn(bookIsbn, isBorrowed) {
  const books = await listBooks();
  const index = books.findIndex((item) => item.isbn === bookIsbn);
  if (index === -1) {
    return null;
  }
  books[index] = { ...books[index], isBorrowed };
  await updateBooks(books);
  return books[index];
}

export async function getBookByQuery(query) {
  const { isbn, title } = query;
  const books = await listBooks();
  const result = books.find(
    (item) => item.isbn === isbn || item.title === title
  );
  return result || null;
}
