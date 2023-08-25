import React from 'react';
import CreateOverview from '../CreateOverview';
import { cardItem, titleCard } from '../../Data/KumbakonamData';

const Kumbakonam = () => {
  return (
    <>
        <CreateOverview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Kumbakonam;