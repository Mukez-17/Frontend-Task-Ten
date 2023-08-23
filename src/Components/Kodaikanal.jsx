import React from 'react';
import TitleCard from '../Pages/TitleCard';
import { cardItem, titleCard } from '../Data/KodiakanalData';
import CreateCard from '../Pages/CreateCard';

const Kodaikanal = () => {
  return (
    <section id='kodaikanal'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Kodaikanal;