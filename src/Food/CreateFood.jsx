import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { cardItem, title } from '../Data/Food';

const CreateFood = () => {
  return (
    <div className='body'>
        <Container style={{padding:'5.5% 0 3%'}}>
          <Row>
            <div className="col-lg-6" style={{paddingRight:"2.5%"}}>
              <h4 style={{paddingBottom:'3%'}}>{title.heading}</h4>
              <p
                style={{
                  textAlign:'justify'
                }}
              >
                <span style={{marginLeft:'60px'}}></span>
                {title.content}
              </p>
            </div>
            <div 
              className="col-lg-6"
              style={{padding:'2.5% 0 0 5%'}}
            >
              {title.foodImages.map((item) => (
                <img 
                  key={item.id}
                  src={item.imgsrc} 
                  style={{
                    width:"43%",
                    height:'40%',
                    padding:'1.3% 2%'
                  }} 
                  alt="Food" 
                />
              ))}
            </div>
          </Row>
          <h4 
            style={{
              textAlign:'center',
              paddingTop:'2%'
              }}
          >
            TAMILNADU
          </h4>
          <h4 
            style={{
              textAlign:'center',
              paddingBottom:'6%'
            }}
          >
            FAMOUS AND LOCAL FOODS
            </h4>
          <Row>
            {cardItem.map((item) => (
              <div 
                className="col-lg-5"
                key={item.id}
                style={{
                  margin:item.id % 2 === 0 ? '2% 0 2% 5%' : '2% 5% 2% 0',
                  padding:'1.5%',
                  borderRadius:"7%",
                  boxShadow:"0 0 10px 0 black"
                }}
              >
                <h5
                  style={{
                    textAlign:'center',
                    padding:'1% 0 3%'
                    }}
                >
                  {item.districtName}
                </h5>
                <p
                  style={{
                    textAlign : "justify",
                    fontFamily:"unset"
                  }}
                >
                  <span style={{marginLeft:'60px'}}></span>
                  {item.content}
                </p>
              </div>
            ))}
          </Row>
        </Container>

    </div>
  )
}

export default CreateFood;