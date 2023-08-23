import React from 'react';
import TitleCard from '../Pages/TitleCard';
import CreateCard from '../Pages/CreateCard';
import { cardItem, titleCard } from '../Data/YercaudData';

const Yercaud = () => {
  return (
    <section id='yercaud'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Yercaud;