const { Router } = require("express");

const route = Router();
const bcrypt = require("bcrypt");

const { Users } = require("../models");

module.exports = (router) => {
  router.use("/users", route);

  const getUsers = async (req, res, next) => {
    try {
      const users = await Users.findAll();
      return res.json(users);
    } catch (err) {
      return next(err);
    }
  };

  const registerUser = async (req, res, next) => {
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
      const users = await Users.create({ ...req.body, password: hash });
      res.json(users);
    } catch (err) {
      return next(err);
    }
  };

  const updateUser = async (req, res, next) => {
    try {
      const users = await Users.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(users);
    } catch (err) {
      return next(err);
    }
  };

  const deleteUser = async (req, res, next) => {
    try {
      const users = await Users.destroy({
        where: { id: req.params.id },
      });
      res.json(users);
    } catch (err) {
      return next(err);
    }
  };

  route.get("/", getUsers);
  route.post("/", registerUser);
  route.put("/:id", updateUser);
  route.delete("/:id", deleteUser);
};
