import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Projects from './components/workPage/WorkPage';
import About from './components/about/About';
import Foodbyte from './components/projects/Foodbyte';
import Studyhive from './components/projects/Studyhive';
import Project from './components/projects/Projects';
import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/foodbyte" element={<Foodbyte/>} />
          <Route path="/studyhive" element={<Studyhive/>} />
          <Route path='projects/:id' element={<Project/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
