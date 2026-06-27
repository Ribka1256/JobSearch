import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobCard from "../Components/JobCards.jsx";
import '../css/Home.css';
import { searchJobs, getJobs } from "../service/api";

const categories = ["All", "Engineering", "Design", "Marketing", "Content", "Data Science", "Service"];

function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const popularJobs = await getJobs();
        setJobs(popularJobs);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchJobs(searchQuery);
      setJobs(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load jobs");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  const filteredJobs =
    activeCategory === "All"
      ? jobs
      : jobs.filter(
          (job) =>
            job.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>

      <div className="hero">
        <h1>Discover Great Careers</h1>
        <p>
          Search or filter through verified opportunities across top tech,
          service, and design domains.
        </p>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="search for jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="home">
        <aside className="filter-sidebar">
          <div className="filter-header">
            <h4>🔻 Filter Listings</h4>
            <span className="reset">Reset</span>
          </div>

          <div className="filter-group">
            <h5>JOB TYPE</h5>
            {["Full-time", "Part-time", "Contract", "Remote", "Internship"].map(
              (t) => (
                <label key={t}>
                  <input type="checkbox" /> {t}
                </label>
              )
            )}
          </div>

          <div className="filter-group">
            <h5>EXPERIENCE LEVEL</h5>
            {["Entry Level", "Mid Level", "Senior", "Lead"].map((t) => (
              <label key={t}>
                <input type="checkbox" /> {t}
              </label>
            ))}
          </div>
        </aside>

        <div className="job-results">
          <div className="results-header">
            <p>Showing {filteredJobs.length} jobs available</p>
            <div className="view-toggle">
              <button className="active">Poster Grid</button>
              <button>Classic Rows</button>
            </div>
          </div>

          {error && <p className="error-text">{error}</p>}
          {loading && <p className="loading-text">Loading jobs...</p>}

          <div className="movies-grid">
            {filteredJobs.map((job) => (
              <JobCard key={job.share_link} job={job} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;