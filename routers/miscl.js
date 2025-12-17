const { Router } = require("express");

const misclRouter = new Router();

// Read
misclRouter.get("/getRoute", (req, res) => {
  // You can use query params to provide arguments to a GET request since you should not be sending request body with GET
  console.log(req.query);
  res.send("<h1>Read Route (R)</h1>");
});

// Write (Create)
misclRouter.post("/postRoute", (req, res) => {
  // Request Body fetching (It's a simple object)
  console.log(req.body);
  res.send(`Sum is ${req.body.n1 + req.body.n2}`);
});

// Delete
misclRouter.delete("/deleteRoute", (req, res) => {
  res.send("<h1>Delete Route (D)</h1>");
});

// Update
misclRouter.patch("/patchRoute", (req, res) => {
  res.send("<h1>Update Route (U)</h1>");
});

/* Exporting the Router */
module.exports = misclRouter;
