import React from 'react';
import { Figure } from 'react-bootstrap';

const HeaderFile = ({PlaceToVisitTitle}) => {
  return (
    <div className='body' style={{margin:"40px 0 40px 0"}}>
      <Figure style={{float:"right", marginLeft:"40px"}}>
        <img
            src={PlaceToVisitTitle.HeadingImg} 
            alt={PlaceToVisitTitle.Heading}
            style={{
                position:"relative",
                float:"right",
                width:"590px",
                height:"450px",
                marginLeft:"35px"
            }}
        />
        <Figure.Caption style={{textAlign:"center", fontSize:"1rem"}}>{PlaceToVisitTitle.Heading}</Figure.Caption>
        </Figure>
        <h4 style={{marginBottom:"40px"}}>{PlaceToVisitTitle.Heading}</h4>
        <p style={{textAlign:"justify"}}>
        <span style={{marginLeft:"80px"}}></span>
        {PlaceToVisitTitle.Content.Content1}
        <br /><br/>
        <span style={{marginLeft:"80px"}}></span>
        {PlaceToVisitTitle.Content.Content2}
        <br /><br/>
        <span style={{marginLeft:"80px"}}></span>
        {PlaceToVisitTitle.Content.Content3}
        <br /><br/>
        <span style={{marginLeft:"80px"}}></span>
        {PlaceToVisitTitle.Content.Content4}
        <br /><br/>
        </p>
    </div>
  )
}

export default HeaderFile;