import JobCards from "../Components/JobCards.jsx";
import '../css/Home.css'
import { useState ,useEffect} from "react";
import { searchJobs, getJobs } from "../service/api";
function Home() {

    const [jobs, setJobs] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
      const fetchJobs = async () =>{
      try
      {
        const popularJobs = await getJobs()
        setJobs(popularJobs)
       } catch(err){
console.log(err);
        setError("Failed to load the movie");
      } finally {
        setLoading(false);
      }
        }
      fetchJobs()
    },[])

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
        <input type="text" placeholder="search for jobs..." onChange={(e) => setSearchQuery(e.target.value)} />
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
