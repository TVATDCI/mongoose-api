import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import Article from "./models/Article.js";

const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
// connection string username and password removed after testing. Tested!
mongoose
  .connect("connection string, username and password removed after testing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Check if the server is running
app.get("/", (req, res) => {
  res.send("Happy New Year 2025! sever is running on port 5000");
});

// Task 4: User Endpoints
// GET /users - Fetch all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err });
  }
});

// POST /users - Create a new user
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new User instance from request body
    const savedUser = await newUser.save(); // Save user to the database
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: "Error creating user", error: err });
  }
});

//

// Task 5: Article Endpoints
// GET /articles - Fetch all articles
app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("author", "firstName lastName") // Populate author field with user details
      .populate("comments.user", "firstName lastName"); // Populate comment user details
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching articles", error: err });
  }
});

// POST /articles - Create a new article
app.post("/articles", async (req, res) => {
  try {
    const newArticle = new Article(req.body); // Create a new Article instance from request body
    const savedArticle = await newArticle.save(); // Save article to the database
    res.status(201).json(savedArticle);
  } catch (err) {
    res.status(400).json({ message: "Error creating article", error: err });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
