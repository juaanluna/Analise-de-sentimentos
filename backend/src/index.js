const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes());


const port = process.env.PORT || 3333;
app.listen(port);
