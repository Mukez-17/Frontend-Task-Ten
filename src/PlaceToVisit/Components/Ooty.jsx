import React from 'react';
import CreateOverview from '../CreateOverview';
import { cardItem, titleCard } from '../../Data/OotyData';

const Ooty = () => {
  return (
    <>
        <CreateOverview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Ooty;