import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectdb from "./src/db/mongo.db.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
connectdb();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(process.env.PORT || 3000, () => {
    if(!connectdb){
        console.error("Failed to connect to MongoDB");
        process.exit(1);
    }
  console.log("Server is running on port 3000");
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});
