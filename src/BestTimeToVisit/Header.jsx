import React from 'react';
import { dropDown, title } from '../Data/Best Time to visit/TamilNaduData';
import { Accordion, Container, Figure, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='body'>
        <h4 style={{padding:"40px 40px 0"}}>TAMILNADU TOURISM</h4>
        <h2 style={{padding:"0 40px 40px"}}>Best Time To Visit</h2>
        <Container>
          <Row>
            <div className="col-lg-6">
              <Figure>
                <Figure.Image
                  src={title.imgsrc}
                />
                <Figure.Caption style={{textAlign:"center", fontWeight:"500"}}>
                  {title.placeholder}
                </Figure.Caption>
              </Figure>
            </div>
            <div className="col-lg-6">
              <h5 style={{textAlign:"center", padding:"0 0 40px"}}>More about Best Time to Travel to Tamil Nadu</h5>
              {dropDown.map((item) => (
                <Accordion key={item.id}>
                  <Accordion.Item eventKey={item.id}>
                    <Accordion.Header>{title.Heading + " " + item.season}</Accordion.Header>
                    <Accordion.Body>
                      <p 
                        style={{textAlign:"justify"}}
                      >
                        <span style={{marginLeft:"60px"}}></span>
                        {item.content}
                      </p>
                      <Figure>
                        <Figure.Image 
                          src={item.imgsrc} 
                          />
                        <Figure.Caption 
                          style={{textAlign:"center", fontWeight:"500"}}
                        >
                          {item.placeholder}
                        </Figure.Caption>
                      </Figure>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </div>
            <div style={{textAlign:"justify"}}>
              <span style={{marginLeft:"80px"}}></span>
              {title.content}
            </div>
          </Row>
        </Container>
    </div>
  )
}

export default Header