import './App.css';
import Home from './Views/Home/Home'
import Detail from './Views/Detail/Detail';
import About from './Views/About/About';
import Create from './Views/Create/Create';
import {Route, Routes, Link, useLocation} from "react-router-dom"

function App() {
   const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname === "/" && <Link to="/home">
        <button>Hora de ver perritos!</button>
      </Link>}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/dogs/:ID" element= {<Detail/>}/>
        <Route path="/dogs/create" element= {<Create/>}/>
        <Route path= "/about" element= {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
