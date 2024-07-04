import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
