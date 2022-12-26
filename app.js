require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cors());

//home route
app.get("/", (req, res) => {
  res.send(" <h1>RWANDA REST API</h1>");
});

const usersRoute = require("./routes/users");
app.use("/api/users/", usersRoute);

//404 route
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "The page does not exist on the server.",
    },
  });
});

const port = process.env.PORT || 801;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
