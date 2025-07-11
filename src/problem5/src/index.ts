import express from "express";
import bodyParser from "body-parser";
import resourceRouter from "./routes/resource";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/resources", resourceRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
