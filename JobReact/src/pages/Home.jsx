import JobCards from "../Components/JobCards.jsx";
function Home(){

    const jobs = [
        {id: 1, title: "Software Engineer", company: "TechCorp", location: "New York, NY", salary: "$100,000 - $120,000"},
        {id: 2, title: "Data Analyst", company: "DataSolutions", location: "San Francisco, CA", salary: "$80,000 - $95,000"},
        {id: 3, title: "Product Manager", company: "InnovateX", location: "Austin, TX", salary: "$110,000 - $130,000"},
        {id: 4, title: "UX Designer", company: "DesignHub", location: "Seattle, WA", salary: "$90,000 - $105,000"},
        {id: 5, title: "DevOps Engineer", company: "CloudWorks", location: "Boston, MA", salary: "$95,000 - $115,000"}
    ]
    return <div> 
        {jobs.map((job) => <JobCards job={job} key= {job.id}/>)}
    </div>
}
export default Home;