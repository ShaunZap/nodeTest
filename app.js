const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));

app.get("/api/v1/users", (req, res) => {
  res
    .status(200)
    .json({ status: "success", results: users.length, data: { users } });
});

app.post("/api/v1/users", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
