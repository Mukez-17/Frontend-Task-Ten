import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Yercaud';

const Yercaud = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Yercaud;