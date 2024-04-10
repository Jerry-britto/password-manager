import express from "express";
import dotenv from "dotenv";
import connectToDb from "./db/index.js";
import router from "./routers/routes.js";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/api",router)

dotenv.config({
  path: "./env",
});
connectToDb();
app.get("/", (_, res) => {
  res.send("Your server is active");
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
