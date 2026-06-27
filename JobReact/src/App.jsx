import Home from "./pages/Home.jsx";
import Fav from "./pages/Fav.jsx";
import ResumeUpload from "./pages/ResumeUpload.jsx"
import JobDetail from "./pages/JobDetail.jsx"
import NavBar from './Components/NavBar.jsx'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Fav />} />
        <Route path="/upload" element={<ResumeUpload/>}/>
        <Route path="/detail" element={<JobDetail/>}/>
      </Routes>
    </main>
  );
}

export default App;
