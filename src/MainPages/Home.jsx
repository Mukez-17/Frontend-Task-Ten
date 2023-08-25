import React from 'react';
import CarouselItem from "../Home/Pages/CarouselItem";
import PlacesNavbar from "../Home/Pages/PlacesNavbar";
import Chennai from '../Home/Components/Chennai';
import Rameshwaram from '../Home/Components/Rameshwaram';
import Kodaikanal from '../Home/Components/Kodaikanal';
import Ooty from '../Home/Components/Ooty';
import Kanyakumari from '../Home/Components/Kanyakumari';
import Kumbakonam from '../Home/Components/Kumbakonam';
import Madurai from '../Home/Components/Madurai';
import Yercaud from '../Home/Components/Yercaud';
import Theni from '../Home/Components/Theni';
import Hogenakkal from '../Home/Components/Hogenakkal';
import Navigation from '../Home/Pages/Navigation';

const Home = () => {
    return (
        <>
          <Navigation />
          <CarouselItem />
          <PlacesNavbar />
          <Chennai />
          <Rameshwaram />
          <Kodaikanal />
          <Ooty />
          <Kanyakumari />
          <Kumbakonam />
          <Madurai />
          <Yercaud />
          <Theni />
          <Hogenakkal />
        </>
      );
}

export default Home