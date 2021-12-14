const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

// getting-ServerUp.js

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connection Succssfull!"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(443, () => {
  console.log("Backend Server is Running");
});
