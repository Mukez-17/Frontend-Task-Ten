import React from 'react';
import TitleCard from '../Pages/TitleCard';
import { cardItem, titleCard } from '../Data/RameshwaramData';
import CreateCard from '../Pages/CreateCard';

const Rameswaram = () => {
  return (
    <>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </>
  )
}

export default Rameswaram;