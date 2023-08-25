import React from 'react';
import CreateOverview from '../CreateOverview';
import { cardItem, titleCard } from '../../Data/YercaudData';

const Yercaud = () => {
  return (
    <>
        <CreateOverview titleCard={titleCard} cardItem={cardItem}/>
    </>
  )
}

export default Yercaud;