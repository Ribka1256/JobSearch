import { useState } from "react";
function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const handlefile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlefile2 = (e) =>{
    setFile2(e.target.files[0])
  }
  return (
    <div>
        <h1>Appliction Form</h1>
      <h3>personal Information</h3>
      Full Name: <input type="text" id="user_name" placeholder="Full Name..." />
      <br />
      Email: <input
        type="email"
        name="from_email"
        id="user_email"
        placeholder="Your Email"
        required
      /><br/>
        Phone: <input type="number" placeholder="+251" />
      <br />
        Birth Date: <input type="date" placeholder="Full Name..." />
      <br />
      <h3>Resume/CV</h3>
      <input type="file" onChange={handlefile} />
      {file && <p>Selected file: {file.name}</p>}

      <h3>Eduction</h3>
      <select required>
      <option value="high">High School</option>
      <option value="degree">Degree</option>
      <option value="master">Masters</option>
      <option value="phd">PHD</option>
      </select>

      <h3>Work Experience(If there is one)</h3>
      Company Name: <input type="text" placeholder="Company Name..." /><br/>
      Job Title: <input type="text" placeholder="Job Name..." /><br/>
      Employment date: <input type="text" placeholder="Employment date..." /><br/>
      Achievement: <textarea type="message" id="user_message"
                  rows="5" placeholder="Achievement..." /><br/>

        <h3>Skills</h3>
        <p>Enter any additonal skills</p>
        <textarea type="message" id="user_message"
                  rows="5" placeholder="Achievement..." /><br/>
                  Uplaod if you have any certification
      <input type="file" onChange={handlefile2} />
      {file && <p>Selected file: {file.name}</p>}

    </div>
  );
}
export default ResumeUpload;
