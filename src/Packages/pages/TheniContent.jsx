import React from 'react';
import DistrictContent from '../DistrictContent';
import { CityContent, defaultpackages, packageContent } from '../../Data/Packages/Theni';

const Theni = () => {
  return (
    <>
        <DistrictContent CityContent={CityContent} packageContent={packageContent} defaultPackages={defaultpackages}/>
    </>
  )
}

export default Theni;