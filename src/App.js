import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Projects from './components/workPage/WorkPage';
import About from './components/about/About';
import Foodbyte from './components/projects/Foodbyte';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
