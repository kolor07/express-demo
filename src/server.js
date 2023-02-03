import express from "express";
const app = express();

import * as userController from "./controller/userController.js";
const port = 8080;

app.get("/", userController.getUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
