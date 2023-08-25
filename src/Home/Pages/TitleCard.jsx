import React from 'react';
import { Container} from 'react-bootstrap';

const TitleCard = ({titleCard}) => {
  return (
    <div className='body place-container'>
      <h3>{titleCard.id}.{titleCard.Heading}</h3>
      <Container>
        <div className='row'>
          <div className="col col1">
              <img src={titleCard.mainImg} alt={titleCard.Heading} className='title-image'/>
          </div>
          <div className="col">
              <h5>{titleCard.title}</h5>
              <p><span></span>{titleCard.content.content1}</p>
              <p><span></span>{titleCard.content.content2}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TitleCard;
