import express from "express";
import path from "path";
import fs from "fs";

const _dirname = path.resolve();

const app = express();
app.use(express.json()); ///injecting the middleware between the server and client, power to manipulate the data in between
app.use(express.urlencoded()); //encoding the json file

const fn = _dirname + "/userList.text";

//get for registration
app.get("/registration", (req, res) => {
  res.sendFile(_dirname + "/src/registration.html");
});

//get the login form
app.get("/", (req, res) => {
  console.log(req.query);
  res.sendFile(_dirname + "/src/form.html");
});

//post from the registration
// app.post("/registration", (req, res) => {
//   res.sendFile(_dirname + "/src/registration.html");
//   //   console.log(req.body, "clicked");
// });

////using the data from post method
app.post("/registration", (req, res) => {
  const { email, password } = req.body; //getting the email and password and destructuring
  const dt = email + "|" + password + "   ";

  fs.appendFile(fn, dt, (error) => {
    error && console.log(error);
  });

  //   console.log(data);
  res.sendFile(_dirname + "/src/registration.html");
  //   console.log(req.body, "clicked");
});

app.listen(8000, (error) => {
  console.log(`http://localhost:8000`);
  error && console.log(error);
});
