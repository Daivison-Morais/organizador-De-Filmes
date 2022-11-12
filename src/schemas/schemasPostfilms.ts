import Joi from "joi";

export const schemaPostFilm = Joi.object({
    "name": Joi.string().required(),
  "genre": Joi.string().required(),
  "platform": Joi.string().required()
})