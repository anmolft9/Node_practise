import express from "express";
import path from "path";

const _dirname = path.resolve();

const app = express();

app.get("/registration", (req, res) => {
  res.sendFile(_dirname + "/src/registration.html");
});

app.post("/registration", (req, res) => {
  res.sendFile(_dirname + "/src/registration.html");
  console.log("clicked");
});

app.listen(8000, (error) => {
  console.log(`http://localhost:8000`);
  error && console.log(error);
});
