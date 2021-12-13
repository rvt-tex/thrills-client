import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';
import {deleteReservation} from '../actions/reservationsActions';



function ReservationList ({reservations, deleteReservation}) {
 
    return (

        
        <div class="container">
              <div class="card">
                    <Container fluid>   
            
                     {/* <h1>Current Reservations List</h1>  */}
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

                    	{/* <h5 class="card-title">Tour: {reservation.tour.title} </h5>     
                        <p class="card-text">Date: {reservation.desired_date}  </p>  
                        <p class="card-text">Time: {reservation.desired_time} </p>
                        <p class="card-text">Special Request: {reservation.special_request} </p>  
                        <p class="card-text">Client: {reservation.client.first_name}</p>   */}
 
                        {/* <button onClick={() => handleEdit(reservation)}> Edit </button>   */}
                        {/* <button onClick={() => deleteReservation(reservation)}>Delete</button> */}
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => deleteReservation(reservation)}>Delete</button>
                        {/* <btn onClick={this.deleteHandler.bind(this, i)} className="btn btn-danger btn-sm">Delete</btn> */}
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


