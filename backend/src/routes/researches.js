const { Router } = require("express");
const route = Router();

const { Researches } = require("../models");

module.exports = (router) => {
  router.use("/researches", route);

  const getResearches = async (req, res, next) => {
    try {
      const search = await Researches.findAll();
      return res.json(search);
    } catch (err) {
      return next(err);
    }
  };
  route.get("/", getResearches);
};
