import React, { useState } from 'react';
import { Button, Col, Figure, Modal, Offcanvas, Row } from 'react-bootstrap';
import "./timeToVisit.css"

const CityModals = ({ titleContent, offCanvasContent }) => {

    const [show, setShow] = useState(false);

    const [isActive, setIsActive] = useState(false);
    
    const handleIndex = () => (
        titleContent.id % 2 === 0 ? setIsActive(false) : setIsActive(true)
    )

    const h3ShowStyle = {
        display : "block",
        paddingLeft : "25px"
    }

    const h3HideStyle = {
        display : "none"
    }

    return (
        <>
            <h3 
                style={titleContent.id % 2 === 0 ? h3ShowStyle : h3HideStyle}
            >
                {titleContent.ids + ". " + titleContent.Heading}
            </h3>
            <div className="col-lg-6">
                <div 
                    className={`modal show ${isActive ? "active" : null}`}
                    style={{
                        display : 'block', 
                        position : 'initial'
                    }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title 
                                style={{
                                    paddingRight:"65px", 
                                    fontSize:"1.45rem", 
                                    fontWeight:"700", 
                                    textAlign:"center"
                                }}
                            >
                                More About Best Time to Travel To {titleContent.Heading}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <Row style={{margin:"0 50px"}}>
                                    {offCanvasContent.map((item) => (
                                        <Col key={item.id}>
                                            <Figure>
                                                <Figure.Image
                                                    src={item.imgsrc}
                                                    alt={item.title}
                                                    style={{
                                                        width:'96px',
                                                        height:'150px'
                                                    }}
                                                />
                                                <Figure.Caption 
                                                    style={{
                                                        width:"96px", 
                                                        textAlign:"center",
                                                        fontWeight:"500",
                                                        fontSize:"14px",
                                                    }}
                                                >
                                                    {item.placeholder}
                                                </Figure.Caption>
                                            </Figure>
                                        </Col>
                                    ))}
                                </Row>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button 
                                variant='secondary' 
                                style={{fontWeight:"600"}}
                                onClick={() => {setShow(false)
                                    setIsActive(false)
                                }}
                            >
                                Close
                            </Button>
                            <Button 
                                variant='primary' 
                                style={{fontWeight:"600"}}
                                onClick={() => {setShow(true)
                                    handleIndex()
                                }}
                            >
                                Save Changes
                            </Button>
                            <Offcanvas 
                                show={show} 
                                onHide={() => {setShow(false)
                                    setIsActive(false)
                                }}
                                placement={titleContent.id % 2 === 0 ? "end" : "start"}
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title
                                        style={{
                                            padding:"0 40px 0 80px",
                                            textAlign:"center"
                                        }}
                                    >
                                        Best Time To Visit In {titleContent.Heading}
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                        {offCanvasContent.map((item) => (
                                            <div key={item.id}>
                                                <h6 
                                                    style={{
                                                        fontWeight:"700", 
                                                        paddingBottom:"10px"
                                                        }}
                                                >
                                                    {item.title}
                                                </h6>
                                                <p 
                                                    style={{
                                                        textAlign:"justify", 
                                                        paddingBottom:"20px"
                                                    }}
                                                >
                                                    <span style={{marginLeft:"80px"}}></span>
                                                    {item.content}
                                                </p>
                                            </div>
                                        ))}
                                    </Offcanvas.Body>
                            </Offcanvas>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        </>
    )
}

export default CityModals;