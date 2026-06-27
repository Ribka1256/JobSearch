import '../css/JobCard.css'
import { useNavigate } from 'react-router-dom'
import '../css/JobCard.css'

function JobCard({ job }) {
  const navigate = useNavigate()

  const onFavoriteClick = (e) =>{
    e.preventDefault()

    if(favorite){

    }
  }
  return (
    <div className="job-card">
      <div className="job-poster">
        {job.image ? <img src={job.image} alt={job.title} /> : null}
       <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
      </div>

      <div className="job-info">
        <h3>{job.title}</h3>
        <p className="company">{job.company_name}</p>
        <p className="location">📍 {job.location}</p>
        <p className="salary">💲 {job.salary_range}</p>
        <button className="apply-btn" onClick={() => navigate('/apply')}>
          Apply Now
        </button>
      </div>
    </div>
  )
}
export default JobCard