const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  check("email").isEmail(),
  check("password").isLength({ min: 5 }),
  check("username").isLength({ min: 3 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "invalid data" });
    }
    console.log(req.body);
    const { username, email, password } = req.body;

    const newuser = await userModel.create({ username, email, password });
    res.json(newuser);
  }
);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  check("username").trim().isLength({ min: 3 }),
  check("password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "invalid data" });
    }
    console.log(req.body);
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username , password: password });
    if(!user){
        return res.status(400).json({ message: "user not found" });
    }
    res.json(user);
  }
);
module.exports = router;
