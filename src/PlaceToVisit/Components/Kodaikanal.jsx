import React from 'react';
import CreateOverview from '../CreateOverview';
import { cardItem, titleCard } from '../../Data/KodiakanalData';

const Kodaikanal = () => {
  return (
    <>
        <CreateOverview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kodaikanal;