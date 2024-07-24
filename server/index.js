const express = require("express");

const app = express();

const router = require("./routes");
app.use("/api", router);

const port = 5050;
app.listen(port, () => {
  console.log("listening on port http://localhost:5050");
});
