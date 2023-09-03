import React from 'react';
import CreateCard from '../CreateCard';
import { CityContent }from '../../Data/Packages/Chennai';

const Chennai = () => {
  return (
    <>
        <CreateCard CityContent={CityContent}/>
    </>
  )
}

export default Chennai;