import '../css/MovieCard.css'
function JobCard({job}){

    return <div className="movie-card">
        <div className="movie-poster">
       <img
  src={job.thumbnail}
  alt={job.title}
/>
   </div>
   <div className="movie-overlay">
    <button className="favorite-btn">🤍</button>
   </div>

     <div className="movie-info">
        <h3>{job.title}</h3>
         <p>{job.company}</p>
          <p>{job.salary}</p>
    </div>
 </div>
}
export default JobCard;