const { Router } = require("express");
const route = Router();

const { Searchs } = require("../models");

module.exports = (router) => {
  router.use("/search", route);

  const getSearchs = async (req, res, next) => {
    try {
      const search = await Searchs.findAll();
      return res.json(search);
    } catch (err) {
      return next(err);
    }
  };

  const findSearchs = async (req, res, next) => {
    const { id } = req.params;
    try {
      const search = await Searchs.findOne({ where: { id } });
      return res.json(search);
    } catch (err) {
      return next(err);
    }
  };

  route.get("/", getSearchs);
  route.get("/:id", findSearchs);
};
