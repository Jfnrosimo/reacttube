import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//import routes
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";

dotenv.config();
const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => console.log(error));
};

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.listen(8000, () => {
  connect();
  console.log("Connected! and Server");
});
