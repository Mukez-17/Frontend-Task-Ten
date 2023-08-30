import React from 'react';
import { Container, Row } from 'react-bootstrap'
import CityContent from './CityContent';
import CityModals from './CityModals';
import "./timeToVisit.css";

const CityBody = ({titleContent, offCanvasContent}) => {
  return (
    <>
        <Container className='container-style' style={{padding:"40px 0"}}>
            <Row>
              {titleContent.id % 2 === 0 ? 
                <CityModals titleContent={titleContent} offCanvasContent={offCanvasContent} /> 
                : 
                <CityContent titleContent={titleContent} />
              }
              {titleContent.id % 2 !== 0 ? 
                <CityModals titleContent={titleContent} offCanvasContent={offCanvasContent} /> 
                : 
                <CityContent titleContent={titleContent} />
              }
            </Row>
        </Container>
    </>
  )
}

export default CityBody;