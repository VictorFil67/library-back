import Joi from "joi";

export const addBookSchema = Joi.object({
  isbn: Joi.string().required(),
  title: Joi.string().required(),
  author: Joi.string().required(),
});

export const updateBookSchema = Joi.object({
  isbn: Joi.string(),
  title: Joi.string(),
  author: Joi.string(),
});

export const markBookSchema = Joi.object({
  isBorrowed: Joi.boolean().required(),
});
