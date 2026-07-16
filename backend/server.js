const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HANDWRITING WORK FROM HOME Backend Running"
  });
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API Working Successfully"
  });
});

app.post("/api/register", (req, res) => {
  console.log("Registration:", req.body);

  res.status(200).json({
    success: true,
    message: "Registration Submitted Successfully",
    data: req.body
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
