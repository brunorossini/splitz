import { User } from "../models";

export default {
  index: async (req, res) => {
    const users = await User.findAll();

    return res.json(users);
  },
  create: async (req, res) => {
    const users = await User.create({ ...req.body, type: "user" });

    return res.json(users);
  },
};
