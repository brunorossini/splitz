require("dotenv").config();

import express from "express";
import chalk from "chalk";

import routes from "./routes";
import "./models";

const log = console.log;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => log(chalk.blue("Server listen on port 3000")));
