const express = require("express");
const app = express();
const database = require("./src/config/Database");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const formRoutes = require("./src/routes/Form.route")

database.connect();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({ origin: "*", credentials: true })
);

// Routes
app.use("/api/v1/", formRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})