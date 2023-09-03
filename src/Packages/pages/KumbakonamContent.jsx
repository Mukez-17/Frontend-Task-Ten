import React from 'react';
import DistrictContent from '../DistrictContent';
import { CityContent, defaultpackages, packageContent } from '../../Data/Packages/Kumbakonam';

const Kumbakonam = () => {
  return (
    <>
        <DistrictContent CityContent={CityContent} packageContent={packageContent} defaultPackages={defaultpackages}/>
    </>
  )
}

export default Kumbakonam;