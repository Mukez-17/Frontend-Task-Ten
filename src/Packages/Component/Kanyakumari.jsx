import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Kanyakumari';

const Kanyakumari = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Kanyakumari;