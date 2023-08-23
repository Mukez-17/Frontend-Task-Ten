import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';

function CreateCard({titleCard, cardItem}) {
  return (
    <>
        <h4 className='place-h4'>Must Visit Place in {titleCard.Heading}</h4>
        <CardGroup className="body">
            {cardItem.map((item) => (
                <Card className="card-item" key={item.id}>
                    <Card.Img variant="top" style={{borderRadius:"8px 8px 0 0"}} src={item.img} alt={item.placeName} height="200"/>
                    <Card.Body>
                        <Card.Title><h5>{item.placeName}</h5></Card.Title>
                        <Card.Text style={{textAlign:"justify"}}>{item.description}</Card.Text>
                        <Button variant="primary" className='justify-content-start'>Read More</Button>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    </>
  );
}

export default CreateCard;