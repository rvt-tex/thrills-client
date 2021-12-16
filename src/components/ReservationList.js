import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';
import {deleteReservation} from '../actions/reservationsActions';



function ReservationList ({reservations, deleteReservation}) {
 
    return (

        
        <div class="container">
              <div class="card">
                    <Container fluid>   
            
                    {reservations.length ? <h1>{reservations.length} Reservations </h1> : <h1>No Reservations</h1>}
                    <div class="row row-cols-1 row-cols-md-2">
                    
            	{reservations.map(reservation => 
               
		        <div class="col mb-4">
		            <div class="card">
                	<div key={reservation.id}>
                    <div class="card-body">
                    <div class="card-header">Tour: {reservation.tour.title}</div>
                    <div class="card-body">Date: {reservation.desired_date}</div>
                    <div class="card-footer">Time: {reservation.desired_time}</div>
                    <div class="card-body">Special Request: {reservation.special_request}</div>
                    <div class="card-footer">Client: {reservation.client.first_name}</div>
                   
                   <br /> <br />

                  
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => deleteReservation(reservation)}>Delete</button>
        
		            </div> 
                	</div>
                     </div>
                     </div>
                     
            )}



            </div>
            </Container>
            </div>
            </div>

                    






    );
};

const mapStateToProps = state => {
    return { reservations: state.reservations }
}


export default connect(mapStateToProps, { deleteReservation })(ReservationList);


