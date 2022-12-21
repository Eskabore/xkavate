import User from "../models/user.js";

export const getUser = (req, res) => {
    const { id } = req.params;
    User.findById(id, (error, user) => {
      if (error) {
        res.status(404).json({ message: error.message });
      } else {
        res.json(user);
      }
    });
  };