const { Router } = require("express");
const users = require("./users");
const auth = require("./auth");
const researches = require("./researches");

module.exports = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send("Api funcionando!");
  });

  //outras rotas
  users(router);
  auth(router);
  researches(router);
  
  return router;
};
