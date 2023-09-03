import React from 'react';
import DistrictContent from '../DistrictContent';
import { CityContent, defaultpackages, packageContent } from '../../Data/Packages/Rameshwaram';

const Rameshwaram = () => {
  return (
    <>
        <DistrictContent CityContent={CityContent} packageContent={packageContent} defaultPackages={defaultpackages}/>
    </>
  )
}

export default Rameshwaram;