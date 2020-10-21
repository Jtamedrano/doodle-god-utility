const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    // Validation
    if (!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({ msg: "Not all required fields have been entered." });
    let existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.status(400).json({ msg: "Email is already used by a user." });
    if (password.length < 6)
      return res.status(400).json({
        msg: "Password does not meet the minimum length of 6 characters.",
      });
    if (password !== passwordCheck)
      return res.status(400).json({
        msg: "Passwords do not match.",
      });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Not all required fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: `User with ${email} has not been registered` });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: `Invalid Login Credentials` });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        display: user.displayName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;