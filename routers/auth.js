const { Router } = require("express");

/* Creating a new Router */
const authRouter = new Router();

/* Declaring routes for this router */
authRouter.get("/login", (req, res) => {
  res.json({ status: true, message: "Hello from Auth Router" });
});

/* Exporting the new router to be used in other file */
module.exports = authRouter;
