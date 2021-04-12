import React from 'react';
import { connect } from 'react-redux';

function ReservationList ({reservations}) {
    return (
        <div>
            
                    <h1>Current Reservations List</h1>
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
		            </div> 
                	</div>
                     </div>
                     </div>
                     
            )}
           </div>
            </div>
    );
};

const mapStateToProps = state => {
    return { reservations: state.reservations }
}


export default connect(mapStateToProps)(ReservationList);
