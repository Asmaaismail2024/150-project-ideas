import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/about" element={<><NavBar /><About /></> } />
        <Route path="/courses" element={<><NavBar /><Courses /></> } />
        <Route path="/projects" element={<><NavBar /><Projects /></> } />

        
        <Route path="*" element={<><NavBar /><NotFound /></>} />
      </Routes>
    </Router>
  );
}

export default App;
