import Joi from "joi";

export default {
  create: Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
      .min(6)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    confirm_password: Joi.ref("password"),
    phone: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    provider: Joi.boolean().default(false),
  }),
};
