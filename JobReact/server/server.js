import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

const fetchJobs = async (query) => {
  const response = await fetch(
    `https://serpapi.com/search?engine=google_jobs&q=${encodeURIComponent(query)}&api_key=${process.env.SERP_API_KEY}`
  );

  const data = await response.json();
  return data.jobs_results || [];
};

app.get("/home", async (req, res) => {
  try {
    const [
      software,
      marketing,
      finance,
      healthcare,
      remote,
      barista
    ] = await Promise.all([
      fetchJobs("software engineer"),
      fetchJobs("marketing"),
      fetchJobs("finance"),
      fetchJobs("healthcare"),
      fetchJobs("remote"),
      fetchJobs("barista")
    ]);

    res.json({
      software,
      marketing,
      finance,
      healthcare,
      remote,
      barista
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
});

app.get("/jobs", async (req, res) => {
  const query = req.query.q || "software engineer";

  try {
    const jobs = await fetchJobs(query);
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});