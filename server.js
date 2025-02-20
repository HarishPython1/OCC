const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config(); // Load environment variables from .env

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Define a simple homepage route
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

// Define a route for registration
router.get("/register", (req, res) => {
    res.json({ message: "Register API is working!" });
  });

  // Define a route for registration
router.get("/login", (req, res) => {
    res.json({ message: "Login API is working!" });
  });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Start server on Render-assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
