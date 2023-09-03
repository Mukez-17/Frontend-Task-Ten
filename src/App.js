import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './MainPages/Home';
import PlaceToVisit from './MainPages/PlaceToVisit';
import BestTimeToVisit from './MainPages/BestTimeToVisit';
import Packages from "./MainPages/Packages";
import Food from "./MainPages/Food";
import "../src/Home/Pages/Home.css";
import Chennai from './Packages/pages/ChennaiContent';
import Rameshwaram from './Packages/pages/RameshwaramContent';
import Kodaikanal from './Packages/pages/KodaikanalContent';
import Ooty from './Packages/pages/OotyContent';
import Kanyakumari from './Packages/pages/KanyakumariContent';
import Kumbakonam from './Packages/pages/KumbakonamContent';
import Madurai from './Packages/pages/MaduraiContent';
import Yercaud from './Packages/pages/YercaudContent';
import Theni from './Packages/pages/TheniContent';
import Hogenakkal from './Packages/pages/HogenakkalContent';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/place-to-visit' element={<PlaceToVisit/>}/>
      <Route path='/best-time-to-visit' element={<BestTimeToVisit/>}/>
      <Route path='/packages' element={<Packages/>}/>
      <Route path='/packages/Chennai' element={<Chennai />}/>
      <Route path='/packages/Rameshwaram' element={<Rameshwaram />}/>
      <Route path='/packages/Kodaikanal' element={<Kodaikanal />}/>
      <Route path='/packages/Ooty' element={<Ooty />}/>
      <Route path='/packages/Kanyakumari' element={<Kanyakumari />}/>
      <Route path='/packages/Kumbakonam' element={<Kumbakonam />}/>
      <Route path='/packages/Madurai' element={<Madurai />}/>
      <Route path='/packages/Yercaud' element={<Yercaud />}/>
      <Route path='/packages/Theni' element={<Theni />}/>
      <Route path='/packages/Hogenakkal' element={<Hogenakkal />}/>
      <Route path='/food' element={<Food/>}/>
    </Routes>
  );
}

export default App;
