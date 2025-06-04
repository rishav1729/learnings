const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/dog", async (req, res) => {
  try {
    const apiRes = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await apiRes.json();
    res.json({ imageUrl: data.message });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dog image" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
