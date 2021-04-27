import jwt from "jwt-simple";
import * as dateFns from "date-fns";

export default (req, res, next) => {
  const token = req.headers["authorization"]?.split("Bearer ")[1];

  if (!token) return res.status(401).json({ msg: "No token provided" });

  try {
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);

    if (payload.exp < dateFns.getUnixTime(new Date()))
      return res.status(401).send({ message: "Token has expired" });

    req.user = payload.sub;
  } catch (err) {
    return res.status(401).send({ message: err.message });
  }

  next();
};
