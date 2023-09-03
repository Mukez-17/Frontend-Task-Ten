import React from 'react';
import DistrictContent from '../DistrictContent';
import { CityContent, defaultpackages, packageContent } from '../../Data/Packages/Madurai';

const Madurai = () => {
  return (
    <>
        <DistrictContent CityContent={CityContent} packageContent={packageContent} defaultPackages={defaultpackages}/>
    </>
  )
}

export default Madurai;