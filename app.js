const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

app.get("/api/v1/users", (req, res) => {
  res
    .status(200)
    .json({ status: "success", results: users.length, data: { users } });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
