import Home from "./pages/Home.jsx";
import Fav from "./pages/Fav.jsx";
import NavBar from './Components/NavBar.jsx'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Fav />} />
      </Routes>
    </main>
  );
}

export default App;
