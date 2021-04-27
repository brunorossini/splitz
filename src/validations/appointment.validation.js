import Joi from "joi";

export default {
  create: Joi.object({
    date: Joi.date().min(new Date()).required(),
    provider: Joi.string().required(),
    address: Joi.string().required(),
  }),
};
