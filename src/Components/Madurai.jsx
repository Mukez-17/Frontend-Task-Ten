import React from 'react';
import TitleCard from '../Pages/TitleCard';
import CreateCard from '../Pages/CreateCard';
import { cardItem, titleCard } from '../Data/MaduraiData';

const Madurai = () => {
  return (
    <>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </>
  )
}

export default Madurai;