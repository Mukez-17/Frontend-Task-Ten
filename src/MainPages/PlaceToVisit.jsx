import React from 'react'
import Navigation from '../Home/Pages/Navigation';
import HeaderFile from '../PlaceToVisit/HeaderFile';
import PlaceToVisitTitle from '../Data/PlacesToVisitMainData';
import Chennai from '../PlaceToVisit/Components/Chennai';
import Rameshwaram from '../PlaceToVisit/Components/Rameshwaram';
import Kodaikanal from '../PlaceToVisit/Components/Kodaikanal';
import Ooty from "../PlaceToVisit/Components/Ooty";
import Kanyakumari from "../PlaceToVisit/Components/Kanyakumari";
import Kumbakonam from "../PlaceToVisit/Components/Kumbakonam";
import Madurai from "../PlaceToVisit/Components/Madurai";
import Yercaud from '../PlaceToVisit/Components/yercaud';
import Theni from "../PlaceToVisit/Components/Theni";
import Hogenakkal from "../PlaceToVisit/Components/Hogenakkal";

const PlaceToVisit = () => {
  return (
    <>
        <Navigation />
        <HeaderFile PlaceToVisitTitle={PlaceToVisitTitle}/>
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

export default PlaceToVisit;