import Joi from "joi";

export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isBorrowed: Joi.boolean().required(),
});
