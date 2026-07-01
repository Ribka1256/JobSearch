import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

const fetchJobs = async (query, location = "United States") => {
  const url = `https://serpapi.com/search?engine=google_jobs&q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&api_key=${process.env.SERP_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.error) {
    console.error("SerpApi error:", data.error);
  } else {
    console.log(`Query "${query}" returned ${data.jobs_results?.length || 0} jobs`);
  }

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


app.use(express.json()); // add this near the top with your other middleware

app.post("/apply", async (req, res) => {
  try {
    const application = req.body;
    console.log("New application received:", application);
    // Later you can save to a DB here e.g.:
    // await db.collection("applications").insertOne(application)
    res.json({ success: true, message: "Application received" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to save application" });
  }
});