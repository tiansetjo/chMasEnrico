import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Col, Row , Card} from 'react-bootstrap';

import img1 from '../img/images-products-1.png'
import img2 from '../img/images-products-2.png'
import img3 from '../img/images-products-3.png'
import img4 from '../img/images-products-4.png'
import img5 from '../img/images-products-5.png'
import img6 from '../img/images-products-6.png'
import img7 from '../img/images-products-7.png'
import img8 from '../img/images-product-8.png'
import img9 from '../img/images-product-9.png'

function Content(){
    return (
        <div>
 <Container fluid="md">
            <Row style ={{margin :'10px' , padding :'20px'}}>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img1} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img2} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img3} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            </Row>

            <Row style ={{margin :'10px' , padding :'20px'}}>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img4} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img5} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img6} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            </Row>

            <Row style ={{margin :'10px' , padding :'20px'}}>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img7} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img8} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '300px', height : "390px" }}>
            <Card.Img variant="center" src={img9} style = {{height :'300px' , width :'250px', margin :'20px' , padding :'20px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>Galactus la parte</Card.Title>
            </Card.Body>
            </Card>
            </div>
            </Col>
            </Row>

        </Container>
        </div>

    )
}

export default Content;