const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({ mssg: "hello" });
});

const port = 5050;
app.listen(port, () => {
  console.log("listening on port http://localhost:5050");
});
