// // console.log("first and second ss");

// // const EventEmitter = require("events");

// // import EventEmitter from "events";
// import express from "express"; //importing the express
// import path from "path";

// const _dirname = path.resolve();
// // console.log(_dirname);

// ////express
// const app = express();

// app.use("/registration", (req, res) => {
//   //   res.send("soooooonnnn");
//   res.sendFile(_dirname + "/src/registration.html");
// });
// app.post("/registration", (req, res) => {
//   res.send("soooooonnnn");
//   res.sendFile(_dirname + "/src/registration.html");
// });

// app.use("/", (req, res) => {
//   //   res.send("hey");
//   res.sendFile(_dirname + "/src/form.html");
// });

// ///event emmitter
// // const eventEmitter = new EventEmitter();
// // eventEmitter.on("anmol", () => {
// //   console.log("bang");
// // });
// // eventEmitter.on("buyaa", () => {
// //   console.log("bang chuuu");
// // });
// // eventEmitter.on("huhaa", () => {
// //   console.log("bang bang");
// // });

// // eventEmitter.emit("huhaa", "anmol");

// //LISTEN to the given port
// app.listen(8000, (error) => {
//   error && console.log(error);
//   console.log(`http://localhost:8000`);
// });
