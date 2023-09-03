import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Kodaikanal';

const Kodaikanal = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Kodaikanal;