import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReservationForm from './ReservationForm';
import { fetchReservations } from '../actions/reservationsActions'
import ReservationList from './ReservationList';
import './ToursList.css';



class ReservationsContainer extends Component {

    componentDidMount() {
        this.props.fetchReservations();
    }
    
    render() {
        return (
            <div class="container">
                <h1>Reservations</h1>
                <ReservationForm />
                <ReservationList />
            </div>
        );
    }
}

export default connect(null, {fetchReservations})(ReservationsContainer);


