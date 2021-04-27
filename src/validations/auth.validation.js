import Joi from "joi";

export default {
  create: Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  }),
};
