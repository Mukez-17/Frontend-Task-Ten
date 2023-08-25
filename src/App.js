import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './MainPages/Home';
import PlaceToVisit from './MainPages/PlaceToVisit';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/place-to-visit' element={<PlaceToVisit/>}/>
    </Routes>
  );
}

export default App;
