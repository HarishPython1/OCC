const express = require("express");
require('newrelic');  // Add this line at the top of server.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(require('cors')()); // Enable CORS

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Define routes
const authRoutes = require('./routes/auth');
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
