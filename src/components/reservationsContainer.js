import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReservationForm from './ReservationForm';
import { fetchReservations } from '../actions/reservationsActions'



class ReservationsContainer extends Component {

    componentDidMount() {
        this.props.fetchReservations();
    }
    
    render() {
        return (
            <div>
                <h1> Welcome to Reservation Conatiner</h1>
                <ReservationForm />
            </div>
        );
    }
}

export default connect(null, {fetchReservations})(ReservationsContainer);


