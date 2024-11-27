const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

const userModel = require("./models/user");
const dbconnect = require("./config/db");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public" ));

app.set("view engine", "ejs");

// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });

app.get("/", (req, res) => {
  // res.send('Hello World! home page');
  res.render("index");
});
 
// app.get(
//   "/about",
//   (req, res, next) => {
//     console.log("about middleware");
//     next();
//   },
//   (req, res) => {
//     res.send("Hello World! about page");
//   }
// );

// app.get("/contact", (req, res) => {
//   res.send("Hello World! contact page");
// });

app.post("/form-data", (req, res) => {
  res.send("Hello World! form-data page");
  console.log(req.body);
  res.send("Hello World! form-data page");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const newUser = await userModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.send(newUser);
});

app.get("/read-userdata",  (req, res) => {

//   userModel.find().then((data) => {
//     res.send(data);
//   });

//   userModel.find({ name: "zxcv" }).then((data) => {
//     res.send(data);
//   });

//   userModel.findOne({ name: "zxcv" }).then((data) => {
//     res.send(data);
//   });

   
});

app.get("/update-userdata",async (req, res) => {
  await userModel.updateOne({ name: "zxcv1" }, { name: "sddd" }).then((data) => {
    res.send(data);
  });
});

app.get("/delete-userdata", (req, res) => {
  userModel.deleteOne({ name: "sddd" }).then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
