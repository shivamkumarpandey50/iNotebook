const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 3000;

app.use(express.json()); // Middleware for parsing JSON

// app.get("/api/auth", (req, res) => {
//   require("./routes/auth");
// });

// Require the route handler for '/api/auth'
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

// Define route handler for '/api/auth'
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
