import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Rameshwaram';

const Rameshwaram = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Rameshwaram;