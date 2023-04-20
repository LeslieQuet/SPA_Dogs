import './App.css';
import Home from './Components/Home'
import BreedFinder from './Components/BreedFinder';
import ImportingTemps from './Components/ImportingTemps';
import About from './Components/About';
import {Route, Switch, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Link to="/home">
        <button>Hora de ver perritos</button>
      </Link>
      <div className='AppContainer'>
        <Switch>
          {/* <Route path="/" element={<Landing/>} /> */}
          <Route path="/dogs" element={<Home/>} />
          <Route path="/dogs/:id" element= {<BreedFinder/>}/>
          <Route path="/temperments" element= {<ImportingTemps/>}/>
          <Route path= "/about" element= {<About/>}/>
        </Switch>
      </div> */
    </div>
  );
}

export default App;
