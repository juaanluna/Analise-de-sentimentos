var R = require("r-script");
const { Router } = require("express");
const route = Router();

const { Params } = require("../models");

module.exports = (router) => {
  router.use("/params", route);

  const getParams = async (req, res, next) => {
    try {
      const params = await Params.findOne({ order: [["id", "DESC"]] });
      return res.json(params);
    } catch (err) {
      console.log(err);
    }
  };

  const sendParams = async (req, res, next) => {
    try {
      const params = await Params.create(req.body);
      return res.json(params);
    } catch (err) {
      console.log(err);
    }
  };

  route.get("/", getParams);
  route.post("/", sendParams);
};
