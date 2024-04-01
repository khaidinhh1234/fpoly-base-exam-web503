import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.json('OK');
});

app.listen(port, () => {
  console.log("Khởi động server thành công!");
});
