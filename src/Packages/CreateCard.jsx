import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreateCard = ({CityContent}) => {

    const CardContent = () => {
        return (
            <div className="col-lg-6" style={{padding:'1% 0'}}>
                <h3 style={{padding:'0.5% 0'}}>{CityContent.title}</h3>
                {CityContent.contents.map(item => (
                    <p style={{textAlign:'justify'}} key={item.id}>
                        <span style={{marginLeft:'80px'}}></span>
                        {item.content}
                    </p>
                ))}
                <p>More About Packages &emsp;
                    <Link to={`/packages/${CityContent.Heading}`}>
                        <Button variant='outline-primary'>Know More <FaGreaterThan /> </Button>
                    </Link>
                </p>
            </div>
        );
    }

    const CardImage = () => {
        return (
            <div className="col-lg-6" style={{paddingLeft : CityContent.id % 2 === 0 ? "0" : "6%"}}>
                <img src={CityContent.imgSrc} style={{width:'600px', height:'350px'}} alt={CityContent.Heading} />
            </div>
        )
    }

  return (
    <>
        <Container>
            <Row style={{padding:'3% 0'}}>
                <h3 style={{padding:'0.5% 0'}}>{CityContent.ids + ". " + CityContent.Heading}</h3>
                {CityContent.id % 2 === 0 ? <CardImage /> : <CardContent />}
                {CityContent.id % 2 !== 0 ? <CardImage /> : <CardContent />}
            </Row>
        </Container>
    </>
  )
}

export default CreateCard;