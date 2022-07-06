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
//////////LOGIN GET///////
app.get("/", (req, res) => {
  // console.log(req.query);
  res.sendFile(_dirname + "/src/form.html");
});

//////LOGIN POST////////////////////////////////
app.post("/", (req, res) => {
  // console.log(req.body, "triggered");
  const { email, password } = req.body;
  const str = email + "|" + password;
  // console.log(str);

  ///read the file and get the content as a string
  fs.readFile(fn, (error, data) => {
    error && console.log(error);

    // console.log(data.toString());
    const userList = data.toString().split("\n");
    // console.log(userList);
    if (userList.includes(str)) {
      console.log("You are logged in");
      // return res.send("<h1>You are logged in</h1>");
    } else {
      console.log("login attempt failed");
    }

    // return res.send("<h1>Invalid login attempt</h1>");
  });

  ///chedck ig the incomming email and pw combination exist in the file string
  res.sendFile(_dirname + "/src/form.html");
});
//post from the registration
// app.post("/registration", (req, res) => {
//   res.sendFile(_dirname + "/src/registration.html");
//   //   console.log(req.body, "clicked");
// });

/////////////////////////?REGISTRATION POST/////////////////////////
////using the data from post method
app.post("/registration", (req, res) => {
  const { email, password } = req.body; //getting the email and password and destructuring
  const dt = email + "|" + password + "\n";

  fs.appendFile(fn, dt, (error) => {
    error && console.log(error);
  });

  //   console.log(data);
  res.sendFile(_dirname + "/src/registration.html");
  //   console.log(req.body, "clicked");
});

////////port//////
app.listen(8000, (error) => {
  console.log(`http://localhost:8000`);
  error && console.log(error);
});
