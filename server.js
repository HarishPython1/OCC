const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json()); // For parsing JSON bodies

// Import your routes
const authRoutes = require("./routes/auth"); 

// Use your routes for the path '/api/auth'
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
