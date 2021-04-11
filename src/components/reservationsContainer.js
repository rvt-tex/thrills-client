import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReservationForm from './ReservationForm';
import { fetchReservations } from '../actions/reservationsActions'



class reservationsContainer extends Component {

    componentDidMount() {
        this.props.fetchReservations();
    }
    
    render() {
        return (
            <div>
                <ReservationForm />
            </div>
        );
    }
}

export default connect(null, {fetchReservations})(reservationsContainer);


