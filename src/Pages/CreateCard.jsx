import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function CreateCard({titleCard, cardItem}) {
  return (
    <>
        <h4 className='place-h4'>Must Visit Place in {titleCard.Heading}</h4>
        <Container className='card-container'>
            <Row className='row-card'>
                {cardItem.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={4} xl={3} className='card-col'>
                        <Card className="card-item">
                            <Card.Img variant="top" style={{borderRadius:"8px 8px 0 0"}} src={item.img} alt={item.placeName} height="200"/>
                            <Card.Body>
                                <Card.Title><h5>{item.placeName}</h5></Card.Title>
                                <Card.Text style={{textAlign:"justify"}}>{item.description}</Card.Text>
                                <Button variant="primary" className='justify-content-start'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  );
}

export default CreateCard;