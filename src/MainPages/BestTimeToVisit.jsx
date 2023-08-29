import React from 'react';
import Navigation from '../Home/Pages/Navigation';
import Header from '../BestTimeToVisit/Header';
import CityHeader from '../BestTimeToVisit/CityHeader';
import Chennai from '../BestTimeToVisit/Components/Chennai';
import Rameshwaram from '../BestTimeToVisit/Components/Rameshwaram';
import Kodaikanal from "../BestTimeToVisit/Components/Kodaikanal";
import Ooty from "../BestTimeToVisit/Components/Ooty";
import Kanyakumari from "../BestTimeToVisit/Components/Kanyakumari";
import Kumbakonam from "../BestTimeToVisit/Components/Kumbakonam";
import Madurai from "../BestTimeToVisit/Components/Maduari";
import Yercaud from "../BestTimeToVisit/Components/Yercaud";
import Theni from "../BestTimeToVisit/Components/Theni";
import Hogenakkal from "../BestTimeToVisit/Components/Hogenakkal";

const BestTimeToVisit = () => {
  return (
    <>
        <Navigation />
        <Header />
        <CityHeader />
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
  )
}

export default BestTimeToVisit;