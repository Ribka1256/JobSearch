import '../css/MovieCard.css'
function JobCard({job}){

    return <div className="movie-card">
        <div className="movie-poster">
     <img
  src={job.thumbnail || "/job-placeholder.png"}
  alt={job.title}
/>
   </div>
   <div className="movie-overlay">
    <button className="favorite-btn">🤍</button>
   </div>

     <div className="movie-info">
        <h3>{job.title}</h3>
         <p>{job.company_name}</p>
          <p>{job.location}</p>
    </div>
 </div>
}
export default JobCard;