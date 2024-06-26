import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import dbConnect from "./config/mongo";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();
app.use("/", router);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
