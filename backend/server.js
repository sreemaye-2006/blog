import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";

import { userApp } from "./apis/userapi.js";
import { adminApp } from "./apis/adminapi.js";
import { authorApp } from "./apis/authorapi.js";
import { commonApp } from "./apis/commonapi.js";

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
config();

const app = exp();

// CORS
app.use(
  cors({
    origin: [
      "https://blog-two-silk-88.vercel.app",
      "https://blog-git-main-sirisreemaye-9168s-projects.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(exp.json());

// ROUTES
app.use("/user-api", userApp);
app.use("/admin-api", adminApp);
app.use("/author-api", authorApp);
app.use("/common-api", commonApp);

const port = process.env.PORT || 5000;

// DATABASE CONNECTION
const connectdb = async () => {
  try {
    await connect(process.env.DB_URL);

    console.log("DB connected");

    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log("err in db connection", err);
  }
};

connectdb();

// INVALID PATH HANDLER
app.use((req, res, next) => {
  console.log(req.url);

  return res.status(404).json({
    message: `path ${req.url} is invalid`,
  });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err.name);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Error Occured",
      error: err.message,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Error Occured",
      error: err.message,
    });
  }

  res.status(500).json({
    message: "error occured",
    error: err.message,
  });
});