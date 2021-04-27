import Joi from "joi";

export default {
  create: Joi.object({
    street: Joi.string().required(),
    number: Joi.string()
      .min(0)
      .max(6)
      .pattern(/^[0-9]+$/),
    neighborhood: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zip: Joi.string()
      .length(8)
      .pattern(/^[0-9]+$/),
    complement: Joi.string(),
    reference: Joi.string(),
  }),
};
