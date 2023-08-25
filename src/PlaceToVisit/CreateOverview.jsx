import React from 'react';
import { Container, Row } from 'react-bootstrap';

const CreateOverview = ({titleCard, cardItem}) => {

    function imgContainer(item){
        return (
            <div className='col-lg-2 col-md-4 col-sm-6' style={{padding:"0"}}>
                <img 
                    src={item.img} 
                    alt={item.placeName}
                    style={{
                        width : "100%",
                        height : "100%",
                        paddingLeft : item.id % 2 !== 0 ? "0" : "20px",
                        paddingRight : item.id % 2 === 0 ? "0" : "20px" 
                    }}
                />
            </div>
        );
    }

    function textContainer(item){
        return (
            <div className="col-lg-10 col-md-8 col-sm-6" style={{padding:"0"}}>
                <h6 style={{marginTop:"8px", fontWeight:"750"}}>{item.placeName}, Overview</h6>
                <p style={{textAlign:"justify", margin:"0"}}>
                    <span style={{marginLeft:"80px"}}></span>
                    {item.overview.overview1}
                    <br /><br />
                    <span style={{marginLeft:"80px"}}></span>
                    {item.overview.overview2}
                    <br /><br />
                </p>
            </div>
        );
    }

    return (
        <div>
            <h2 style={{textAlign:"center"}}>{titleCard.Heading}</h2>
            <h3 style={{textAlign:"center"}}>Tourist Places Visit</h3>
            <Container>
                {cardItem.map((item) => {
                    return (
                        <Row style={{margin:"65px 0"}} key={item.id}>
                            {item.id % 2 === 0 ? textContainer(item) : imgContainer(item)}
                            {item.id % 2 !== 0 ? textContainer(item) : imgContainer(item)}
                        </Row>
                    );
                })}
            </Container>
        </div>
    )
}

export default CreateOverview