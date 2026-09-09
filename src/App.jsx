// App.jsx or App.js
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Home';
import Careerpaths from './Careerpaths';
import Roadmap from'./Roadmap'
import Mentors from './Mentors'
import Navbar from './Navbar'
import About from'./About'
import Footer from './Footer';
import Feedback from './Feedback';
import Carousal from './Carousal';
import Login from'./Login'
import Signup from'./Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="Home" element={<Home />} />
        <Route path="/Careerpaths" element={<Careerpaths />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/Mentors" element={<Mentors/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Carousal" element={<Carousal/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
       
      </Routes>
    </Router>
  );
}

export default App;
