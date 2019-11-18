const express = require("express");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Hello from node and express" }));

// Routes definition
app.use("/api/characters", require("./routes/characters"));
app.use("/api/characters/:id", require("./routes/characters"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));