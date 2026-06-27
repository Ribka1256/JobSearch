import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/NavBar.jsx";
import '../css/Apply.css';

function Apply() {
  const { state } = useLocation();
  const job = state?.job;
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const handlefile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlefile2 = (e) => {
    setFile2(e.target.files[0]);
  };

  return (
    <>
      <div className="apply-page">
        {/* Sidebar - job summary */}
        <aside className="filter-sidebar">
          <div className="filter-header">
            <h4>📄 Job Summary</h4>
          </div>

          {job ? (
            <div className="filter-group">
              <h5>POSITION</h5>
              <p className="job-title">{job.title}</p>
              <p className="job-company">{job.company_name}</p>
              {job.location && <p className="job-meta">📍 {job.location}</p>}
              {job.salary_range && <p className="job-meta">💲 {job.salary_range}</p>}
            </div>
          ) : (
            <div className="filter-group">
              <p className="job-meta">No job selected</p>
            </div>
          )}

          <div className="filter-group">
            <h5>APPLICATION CHECKLIST</h5>
            <label><input type="checkbox" checked={!!file} disabled /> Resume/CV uploaded</label>
            <label><input type="checkbox" checked={!!file2} disabled /> Certification uploaded</label>
          </div>
        </aside>

        {/* Main form */}
        <div className="apply-form-container">
          <h1>Application Form</h1>

          <section className="form-section">
            <h3>Personal Information</h3>
            <div className="form-row">
              <label>Full Name</label>
              <input type="text" id="user_name" placeholder="Full Name..." />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                id="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-row">
              <label>Phone</label>
              <input type="number" placeholder="+251" />
            </div>
            <div className="form-row">
              <label>Birth Date</label>
              <input type="date" />
            </div>
          </section>

          <section className="form-section">
            <h3>Resume/CV</h3>
            <input type="file" onChange={handlefile} />
            {file && <p className="file-name">Selected file: {file.name}</p>}
          </section>

          <section className="form-section">
            <h3>Education</h3>
            <select required>
              <option value="high">High School</option>
              <option value="degree">Degree</option>
              <option value="master">Masters</option>
              <option value="phd">PHD</option>
            </select>
          </section>

          <section className="form-section">
            <h3>Work Experience (If there is one)</h3>
            <div className="form-row">
              <label>Company Name</label>
              <input type="text" placeholder="Company Name..." />
            </div>
            <div className="form-row">
              <label>Job Title</label>
              <input type="text" placeholder="Job Title..." />
            </div>
            <div className="form-row">
              <label>Employment Date</label>
              <input type="text" placeholder="Employment date..." />
            </div>
            <div className="form-row">
              <label>Achievement</label>
              <textarea rows="5" placeholder="Achievement..." />
            </div>
          </section>

          <section className="form-section">
            <h3>Skills</h3>
            <p className="hint">Enter any additional skills</p>
            <textarea rows="5" placeholder="Skills..." />
          </section>

          <section className="form-section">
            <h3>Certifications</h3>
            <p className="hint">Upload if you have any certification</p>
            <input type="file" onChange={handlefile2} />
            {file2 && <p className="file-name">Selected file: {file2.name}</p>}
          </section>

          <button className="submit-btn">Submit Application</button>
        </div>
      </div>
    </>
  );
}
export default Apply;