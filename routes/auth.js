const express = require("express");
const router = express.Router();  // Define router

// Register route
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).json({ message: "User registered successfully!" });
  } else {
    res.status(400).json({ message: "Username and password are required." });
  }
});

// Login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password123") {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(400).json({ message: "Invalid credentials!" });
  }
});

module.exports = router;  // Export router
