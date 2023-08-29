import React from 'react';
import CreateOverview from '../CreateOverview';
import { cardItem, titleCard } from '../../Data/Home & PlaceToVisit/KanyakumariData';

const Kanyakumari = () => {
  return (
    <>
        <CreateOverview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kanyakumari;