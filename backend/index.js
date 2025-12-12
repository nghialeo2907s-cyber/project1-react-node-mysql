const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

// ⭐ Thêm API test ở đây
app.get("/api/test", (req, res) => {
  res.json({ message: "API test OK" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
