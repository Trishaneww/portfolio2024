import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Projects from './components/workPage/WorkPage';
import About from './components/about/About';
import Foodbyte from './components/projects/Foodbyte';
import Studyhive from './components/projects/Studyhive';
import YaSolutions from './components/projects/Yasolutions';
import PrimeTort from './components/projects/PrimeTort';
import DigitalWealth from './components/projects/DigitalWealth';
import Project from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/foodbyte" element={<Foodbyte/>} />
          <Route path="/studyhive" element={<Studyhive/>} />
          <Route path="/yasolutions" element={<YaSolutions/>} />
          <Route path="/primeTort" element={<PrimeTort/>} />
          <Route path='/projects/:id' element={<Project/>} />
          <Route path='/digitalwealth' element={<DigitalWealth/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
