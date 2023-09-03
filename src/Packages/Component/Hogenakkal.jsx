import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent } from '../../Data/Packages/Hogenakkal';

const Hogenakkal = () => {
  return (
    <>
        <CreateCard CityContent={CityContent} />
    </>
  )
}

export default Hogenakkal;