import React from 'react';
import TitleCard from '../Pages/TitleCard';
import CreateCard from '../Pages/CreateCard';
import { cardItem, titleCard } from '../../Data/MaduraiData';

const Madurai = () => {
  return (
    <section id='madurai'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Madurai;