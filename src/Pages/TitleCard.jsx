import React from 'react';

const TitleCard = ({titleCard}) => {
  return (
    <div className='body place-container'>
    <h3>{titleCard.id}.{titleCard.Heading}</h3>
    <div className='container'>
        <div className="col">
            <img src={titleCard.mainImg} alt={titleCard.Heading} height={350} width={630}/>
        </div>
        <div className="col">
            <h5>{titleCard.title}</h5>
            <p><span> </span>{titleCard.content.content1}</p>
            <p><span></span>{titleCard.content.content2}</p>
        </div>
    </div>
    </div>
  )
}

export default TitleCard