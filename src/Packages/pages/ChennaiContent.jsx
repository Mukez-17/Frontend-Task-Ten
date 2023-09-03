import React from 'react';
import DistrictContent from '../DistrictContent';
import { CityContent, defaultPackages, packageContent } from '../../Data/Packages/Chennai';

const Chennai = () => {
  return (
    <>
      <DistrictContent CityContent={CityContent} packageContent={packageContent} defaultPackages={defaultPackages}/>
    </>
  )
}

export default Chennai;