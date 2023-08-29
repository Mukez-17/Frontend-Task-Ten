import React from 'react';
import TitleCard from '../Pages/TitleCard';
import CreateCard from '../Pages/CreateCard';
import { cardItem, titleCard } from '../../Data/Home & PlaceToVisit/TheniData';

const Theni = () => {
  return (
    <section id='theni'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Theni;