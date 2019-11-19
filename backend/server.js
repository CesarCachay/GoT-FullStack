const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect DB
connectDB();

// It allows to accept data making post request
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Hello from node and express" }));

app.use(cors());

// Routes definition
app.use("/api/characters", require("./routes/characters"));
app.use("/api/characters/:id", require("./routes/characters"));
app.use("/api/books", require("./routes/books"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
