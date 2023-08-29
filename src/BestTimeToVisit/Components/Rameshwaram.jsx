import React from 'react';
import CityBody from '../CityBody';
import { offCanvasContent, titleContent } from '../../Data/Best Time to visit/RameshwaramData';

const Rameshwaram = () => {
  return (
    <div className='body'>
        <CityBody titleContent={titleContent} offCanvasContent={offCanvasContent} />
    </div>
  )
}

export default Rameshwaram;