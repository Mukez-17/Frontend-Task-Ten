import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Navigation';
import CarouselItem from './Pages/CarouselItem';
import PlacesNavbar from "./Pages/PlacesNavbar";
import Chennai from './Components/Chennai';
import Rameshwaram from './Components/Rameshwaram';
import Kodaikanal from "./Components/Kodaikanal";
import Ooty from "./Components/Ooty";
import KanyaKumari from "./Components/Kanyakumari";
import Kumbakonam from "./Components/Kumbakonam";
import Madurai from "./Components/Madurai";
import Yercaud from "./Components/Yercaud";
import Theni from "./Components/Theni";
import Hogenakkal from './Components/Hogenakkal';

function App() {
  return (
    <>
      <Navigation />
      <CarouselItem />
      <PlacesNavbar />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <KanyaKumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </>
  );
}

export default App;
