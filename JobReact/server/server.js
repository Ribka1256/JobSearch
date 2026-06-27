import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/jobs", async (req, res) => {
  const query = req.query.q || "software engineer";

  try {
    const response = await fetch(
      `https://serpapi.com/search?engine=google_jobs&q=${encodeURIComponent(query)}&api_key=${process.env.SERP_API_KEY}`
    );

    const data = await response.json();

    res.json(data.jobs_results || []);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});