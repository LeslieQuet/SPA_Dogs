import './App.css';
import Home from './Views/Home/Home'
import BreedFinder from './Components/BreedFinder';
import ImportingTemps from './Components/ImportingTemps';
import About from './Views/About/About';
import {Route, Routes, Link, useLocation} from "react-router-dom"
import { useState, useEffect} from 'react'

function App() {
  const [breeds, setBreeds] = useState([]);
  const { pathname } = useLocation();

  const getDogs = () => {
    fetch(`http://localhost:3001/dogs`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setBreeds((breeds) => data);
        console.log(data)
      } else {
        window.alert('No hay razas para mostrar');
      }
    })
  }
  
  const onClose = (id) => {setBreeds(breeds.filter(breed => breed.id !== id))}



  return (
    <div className="App">
      {pathname === "/" && <Link to="/home">
        <button>Hora de ver perritos!</button>
      </Link>}
      <Routes>
        <Route path="/home" element={<Home breeds={breeds} getDogs={getDogs} onClose={onClose}/>} />
        <Route path="/dogs/:id" element= {<BreedFinder/>}/>
        <Route path="/temperments" element= {<ImportingTemps/>}/>
        <Route path= "/about" element= {<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
