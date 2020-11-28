const { Router } = require("express");
const users = require("./users");
const auth = require("./auth");
const searchs = require("./searchs");

module.exports = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send("Api funcionando!");
  });

  //outras rotas
  users(router);
  auth(router);
  searchs(router);

  return router;
};
