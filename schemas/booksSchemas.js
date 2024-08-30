import Joi from "joi";

export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isBorrowed: Joi.boolean().required(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string(),
  author: Joi.string(),
});

export const markBookSchema = Joi.object({
  isBorrowed: Joi.boolean().required(),
});
