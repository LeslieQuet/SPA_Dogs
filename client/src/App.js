import './App.css';
import Home from './Views/Home/Home'
import BreedFinder from './Components/BreedFinder';
import ImportingTemps from './Components/ImportingTemps';
import About from './Views/About/About';
import {Route, Routes, Link, useLocation} from "react-router-dom"


function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname === "/" && <Link to="/dogs">
        <button>Hora de ver perritos</button>
      </Link>}
      <Routes>
        <Route path="/dogs" element={<Home/>} />
        <Route path="/dogs/:id" element= {<BreedFinder/>}/>
        <Route path="/temperments" element= {<ImportingTemps/>}/>
        <Route path= "/about" element= {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
