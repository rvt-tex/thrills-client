import React from 'react';
import { connect } from 'react-redux';

function ReservationList ({reservations}) {
    return (
        <div>
            <h1>Reservations List:</h1>
            {reservations.map(reservation => 
                <ul key={reservation.id}>
                    <li >
                        {reservation.desired_date} - {reservation.desired_time} - {reservation.special_request} - {reservation.tour_id} - {reservation.client_id}
                    </li>
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return { reservations: state.reservations }
}


export default connect(mapStateToProps)(ReservationList);
