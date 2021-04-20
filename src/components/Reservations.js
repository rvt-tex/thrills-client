import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchReservations } from '../actions/reservationsActions'
import ReservationForm from './ReservationForm'
import EditReservationForm from './EditReservationForm'
import ReservationList from './ReservationList'


class Reservations extends Component {

    state = { reservationId: false }

    componentDidMount() {
        this.props.fetchReservations()
    }

    handleEdit = (reservation) => {
        this.setState({
            reservationId: reservation.id
        })
    }

    resetReservationId = () => {
        this.setState({ reservationId: false})
    }

    render() {
        
        return (
            <div>
                {this.state.reservationId ? 
                    <EditReservationForm 
                        reservationId={this.state.ReservationId} 
                        resetReservationId={this.resetReservationId}
                    /> : 
                    <CreateReservationForm /> 
                }
                <ReservationsList handleEdit={this.handleEdit}/>
            </div>
        );
    }
}

export default connect(null, { fetchReservations })(Reservations);