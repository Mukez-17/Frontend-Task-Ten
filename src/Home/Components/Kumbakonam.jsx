import React from 'react';
import TitleCard from '../Pages/TitleCard';
import CreateCard from '../Pages/CreateCard';
import { cardItem, titleCard } from '../../Data/Home & PlaceToVisit/KumbakonamData';

const Kumbakonam = () => {
  return (
    <section id='kumbakonam'>
        <TitleCard titleCard={titleCard} />
        <CreateCard titleCard={titleCard} cardItem={cardItem} />
    </section>
  )
}

export default Kumbakonam;