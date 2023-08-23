import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import items from "../Data/CarouselData";

const CarouselItem = () => {
  return (
    <div className='body'>
      <Carousel>
        {items.map((item) => (
          <Carousel.Item key={item.id} interval={1000}>
            <img 
              src={item.imgsrc} 
              alt={item.name}
              className='w-100'
              style={{height:"650px"}}
              />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselItem;