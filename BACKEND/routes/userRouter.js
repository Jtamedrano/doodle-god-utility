const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    id: user._id,
    displayName: user.displayName,
    gameData: user.gameData,
  });
});

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
      gameData: {
        Levels: [],
      },
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
        displayName: user.displayName,
        gameData: user.gameData,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
});

// add a level to the user
router.post("/addLevel", async (req, res) => {
  try {
    const { userID, name, items } = req.body;
    let user = await User.findById(userID);
    let levels = {
      levels: [...user.gameData.levels, { name, items, outcomes: [] }].filter(
        (e) => e !== null
      ),
    };
    user = await User.findOneAndUpdate(userID, { gameData: levels });
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    // verify jwt
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
