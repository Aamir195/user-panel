import Home from './pages/home';
import Detailedpost from './pages/detailed-post'
import Profiledetailed from './pages/profile'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/detail-post" element={<Detailedpost/>} />
            <Route path="/profile" element={<Profiledetailed/>} />
          </Routes>
        
      </Router>

    </div>
  );
}

export default App;
