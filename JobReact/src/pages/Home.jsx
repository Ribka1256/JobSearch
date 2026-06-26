import JobCards from "../Components/JobCards.jsx";
import '../css/Home.css'
import { useState } from "react";
function Home() {

    const [jobs, setJobs] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async(e) =>{
        e.preventDefault();
     if(!searchQuery.trim()) return
     if(loading) return

     setLoading(true)
     try {
      const searchResult = await  searchJobs(searchQuery)
      setJobs(searchResult)
      setError(null)

     }catch(err){
      console.log(err);
        setError("Failed to load the movie");

     }finally
     {
      setLoading(false)
     }
    setSearchQuery("");
    }
  return (
    <div className="home">
      <form  onSubmit={handleSubmit} className="search-form">
        <input type="text" placeholder="search for jobs..." />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {jobs.map(
        (job) =>
          job.title?.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
            (<JobCards job={job} key={job.id} />)
          ),
      )}
    </div>
  );
}
export default Home;
