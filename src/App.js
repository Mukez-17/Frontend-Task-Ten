import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './MainPages/Home';
import PlaceToVisit from './MainPages/PlaceToVisit';
import BestTimeToVisit from './MainPages/BestTimeToVisit';
import Packages from "./MainPages/Packages";
import Destination from "./MainPages/Destination";
import Food from "./MainPages/Food";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/place-to-visit' element={<PlaceToVisit/>}/>
      <Route path='/best-time-to-visit' element={<BestTimeToVisit/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/food' element={<Food/>}/>
    </Routes>
  );
}

export default App;
