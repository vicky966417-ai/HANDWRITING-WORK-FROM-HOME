const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HANDWRITING WORK FROM HOME Backend Running"
  });
});

app.post("/api/register", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    status: "Pending",
    message: "Registration Submitted Successfully"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
