import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';
import {deleteReservation} from '../actions/reservationsActions';
import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';



function ReservationList ({reservations, deleteReservation}) {
 console.log(reservations)
    moment().format();
    
    return (
        <div>
              <Jumbotron fluid>
                    <Container fluid>   
            
                    {/* <h1>Current Reservations List</h1> */}
                    {reservations.length ? <h1>{reservations.length} Current Reservation</h1> : <h1>No Reservations</h1>}
                    <div class="row row-cols-1 row-cols-md-2">
                    
            	{reservations.map(reservation => 
               
		        <div class="col mb-4">
		            <div class="card">
                	<div key={reservation.id}>
                    <div class="card-body">
                    	<h5 class="card-title">Tour #: {reservation.tour_id} </h5>     
                        <p class="card-text">Special Request: {reservation.special_request} </p>  
                        <p class="card-text">Client: {reservation.client_id}</p>  
                        <p class="card-text">Date: {reservation.desired_date}  </p>  
                        <p class="card-text">Time: {reservation.desired_time} </p>
                      

                        {/* <button onClick={() => handleEdit(reservation)}> Edit </button>   */}
                        <button onClick={() => deleteReservation(reservation)}>Delete</button>

                        {/* <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn> */}
		            </div> 
                	</div>
                     </div>
                     </div>
                     
            )}
            </div>
            </Container>
            </Jumbotron>
            </div>
    );
};

const mapStateToProps = state => {
    return { reservations: state.reservations }
}


export default connect(mapStateToProps, { deleteReservation })(ReservationList);


