const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser=require("cookie-parser")

const errorMiddleware = require("./middleware/error");
// routes
const route = require("./routes/route");



const app = express();

app.use(express());
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api", route);


// last middleware

app.use(errorMiddleware);
const port = process.env.PORT || 5000;


mongoose
.connect(process.env.URI)
.then((res) => {
  console.log("connected to db succesfully");
})
.catch((err) => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
