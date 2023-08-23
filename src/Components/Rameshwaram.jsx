import React from 'react';
import TitleCard from '../Pages/TitleCard';
import { cardItem, titleCard } from '../Data/RameshwaramData';
import CreateCard from '../Pages/CreateCard';

const Rameshwaram = () => {
  return (
    <section id='rameshwaram'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Rameshwaram;