import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Ooty';

const Ooty = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Ooty;