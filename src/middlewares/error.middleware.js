import validate from "express-validation";

export default (err, req, res, next) => {
  if (err instanceof validate.ValidationError) {
    return res.status(err.status).json(err);
  }

  return next();
};
