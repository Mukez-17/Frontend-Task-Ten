import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <>
        <Container>
            <Row style={{padding:'3% 0'}}>
                <h3>TAMILNADU TOURISM PACKAGES</h3>
                <div 
                    className="col-lg-6"
                    style={{
                    padding:'2% 0'
                    }}
                >
                    <p 
                        style={{
                            textAlign:'justify',
                            fontFamily:'unset'
                        }}
                    >
                        <span style={{marginLeft:'80px'}}></span>
                        Welcome to our Tamil Nadu Tourism website, your gateway to discovering the captivating treasures of this vibrant southern state in India. Immerse yourself in the charm of Chennai's bustling metropolis, where modernity meets heritage at landmarks like Marina Beach and Kapaleeshwarar Temple. Embark on a spiritual journey to Rameshwaram's sacred shores, visit the hill stations of Kodaikanal and Ooty, and witness the meeting of three oceans at Kanyakumari. Explore the rich heritage of Madurai and Kumbakonam's intricate temples, seek tranquility amidst Yercaud's lush landscapes, and experience the mesmerizing Hogenakkal Falls. Discover the diverse wonders of Tamil Nadu with our thoughtfully curated packages, offering a perfect blend of history, culture, and natural beauty.
                        <br /><br />
                        <span style={{marginLeft:'80px'}}></span>
                        Delve into the heart of Tamil Nadu's captivating destinations through our meticulously crafted travel packages. Immerse yourself in the grandeur of Madurai's Meenakshi Amman Temple, embark on a soul-enriching pilgrimage to Rameshwaram, and breathe in the refreshing air of the hill stations – Kodaikanal, Ooty, and Yercaud. Experience the tranquility of Theni's natural marvels, witness the confluence of faith and architecture in Kumbakonam's temples, and rejuvenate amidst the misty landscapes of Yercaud. Our offerings cater to explorers, history enthusiasts, spiritual seekers, and nature lovers alike, promising an unforgettable journey that embraces the essence of Tamil Nadu's diverse and captivating destinations.
                        <br/><br/>
                    </p>
                </div>
                <div className="col-lg-6">
                    <Figure>
                        <Figure.Image
                            src={require("../Images/Packages/TamilNadu_Map.png")}
                            style={{
                            width:'70%',
                            height:'70%',
                            marginLeft:'20%'
                            }}
                        />
                        <Figure.Caption
                            style={{
                            textAlign:'center',
                            fontWeight:'600'
                            }}
                        >
                            TamilNadu District Map
                        </Figure.Caption>
                    </Figure>
                </div>
            </Row>
        </Container>
        <div style={{textAlign:"center", paddingTop:"2.5%"}}>
            <h3>TAMILNADU TOURISM</h3>
            <h4 style={{fontWeight:"600", paddingTop:"10px"}}>Packages</h4>
        </div>
    </>
  )
}

export default Header;