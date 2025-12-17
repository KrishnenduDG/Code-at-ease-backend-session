/* Importing the "express" module */
const express = require("express");

/* Importing the already created routers */
const authRouter = require("./routers/auth");
const misclRouter = require("./routers/miscl");

/* Creating an express app object */
const app = express();

// Constants
const PORT = process.env.PORT;

/* Declaring a Middleware */
const printCurrentDateInEveryRequest = (req, res, next) => {
  console.log(Date());
  next(); // must otherwise request times out
};

/* Middlewares guiding express on how to parse request body */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Using your own custom middleware */
app.use(printCurrentDateInEveryRequest); // Don't call the function, instead just pass it

// Home Route
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
}); // This means that there can be a GET request for "/" path in which you send this response

// Greetings Route
app.get("/greetings", (req, res) => {
  res.send("<h1>Greetings</h1>");
}); // This means that there can be a GET request for "/greetings" path in which you send this response

/* Registering your router so as to make app aware of their existence */
app.use("/auth", authRouter);
app.use("/miscl", misclRouter);

/* 404 Handler (Gracefully handling the not-found error) */
app.use((req, res) => {
  res.send("Oops route not found");
});

/* "Listening" for incoming requests */
app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
