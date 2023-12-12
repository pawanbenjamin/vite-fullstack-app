const path = require("path");
const express = require("express");
const PORT = 3000;

const app = express();

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send({ message: "Hello World" });
});

app.use(express.static(path.join(__dirname, "./client", "dist")));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
