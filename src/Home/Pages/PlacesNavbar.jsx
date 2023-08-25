import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./Home.css";

const Places = () => {
  return (
    <div className='places body'>
        <h4>Tourist Places To Tamil Nadu</h4>
        <h4>Here Are The Top Places To Visit In Tamil Nadu In 2023</h4>

        <Nav defaultActiveKey="/home" className='place-nav'>
            <Nav.Item as='ul' className='place-ul'>
                <Nav.Item as="li" >
                    <Nav.Link href="#chennai" className="place-link"><h5>Chennai</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#rameshwaram" className="place-link"><h5>Rameshwaram</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>
            <Nav.Item as='ul' className='place-ul'>
                <Nav.Item as="li" >
                    <Nav.Link href="#kodaikanal" className="place-link"><h5>Kodaikanal</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" > 
                    <Nav.Link href="#ooty" className="place-link"><h5>Ooty</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>
            <Nav.Item as='ul' className='place-ul'>
                <Nav.Item as="li">
                    <Nav.Link href="#madurai" className="place-link"><h5>Madurai</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#kanyakumari" className="place-link"><h5>Kanyakumari</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
            <Nav.Item as='ul' className='place-ul'>
                <Nav.Item as="li" >
                    <Nav.Link href="#kumbakonam" className="place-link"><h5>Kumbakonam</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                    <Nav.Link href="#yercaud" className="place-link"><h5>Yercaud</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
            <Nav.Item as='ul' className='place-ul'>
                <Nav.Item as="li" >
                    <Nav.Link href="#theni" className="place-link"><h5>Theni</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" >
                        <Nav.Link href="#hogenakkal" className="place-link"><h5>Hogenakkal</h5></Nav.Link>
                </Nav.Item>
            </Nav.Item>            
        </Nav>
    </div>
  )
}

export default Places