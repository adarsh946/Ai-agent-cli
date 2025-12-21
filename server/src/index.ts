import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
dotenv.config();

const app = express();
const port = 3005;

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
