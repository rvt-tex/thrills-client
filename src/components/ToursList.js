import React from 'react';
import { connect } from 'react-redux';
import './ToursList.css';
import { Link } from 'react-router-dom';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, Row, Col,  CardBody} from 'reactstrap';




function ToursList ({tours}) {

    function makeRes () {
        console.log('you have been cliced place link to reservation form to select actual tour' );    
    }

    return (
        
      
        <CardDeck> 
            <Card>
                <Row>
                    {tours.map(tour => 
                        <Col md="6">
                            <CardBody>
                                <CardTitle tag="h5">{tour.title}</CardTitle>
                                    <ul className='tours-lists-items' key={tour.id}><br></br>
                                        <CardImg src={tour.img} class="rounded" width='600px' height='450px' />
                                        <CardText>{tour.description}</CardText>
                                        <CardSubtitle tag="h6" className="mb-2"> {tour.duration} | ${tour.price} </CardSubtitle>
                                        <Link to='/Reservations' color="primary" size="sm" onClick={makeRes}>RESERVE</Link>
                                    </ul>
                            </CardBody>
                        </Col>
                    )} 
                </Row>
            </Card>
        </CardDeck>     

      
       
    );
};

const mapStateToProps = state => {
    return { tours: state.tours }
}


export default connect(mapStateToProps)(ToursList);



