import React, { Component } from 'react';
import { connect } from 'react-redux'

import { editReservation } from '../actions/reservationsActions'

class EditReservationForm extends Component {

    state = {
        desired_date: '',
        desired_time: '',
        special_request: '',
        tour_id: '',
        client_id: '',
        state: ''
    }

    componentDidMount(){
        this.findReservation()
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    findReservation = () => {
        const { reservations, reservationId} = this.props
        const reservation = reservations.find(reservation => reservation.id === reservationId)
        this.setState({
            id: reservation.id,
            desired_date: reservation.desired_date,
            desired_time: reservation.desired_time,
            tour_id: reservation.tour_id,
            client_id: reservation.client_id,
            state: reservation.state
        })
    }

    update = e => {
        e.preventDefault()
        this.props.editReservation(this.state)
        this.props.resetReservationId()
    }


    render() {
        return (
            <>
            <h1>Edit Reservation Form</h1>
            <form onSubmit={this.update}>

                <div class="form-group">
                <label>Tour </label><br></br>
                <input type='text' value={this.state.tour_id} onChange={this.handleChange} name='tour_id'/> 
                </div><br/>
               
        
                <div class="form-group">
                <label>Desired Date </label><br></br>
                <input type='text' value={this.state.desired_date} onChange={this.handleChange} name='desired_date'/>
                <br/>

                
                <label>Desired Time </label><br></br>
                <input type='text' value={this.state.desired_time} onChange={this.handleChange} name='desired_time'/>
                <br/>

               
                <label>Special Request </label><br></br>
                <input type='text' value={this.state.special_request} onChange={this.handleChange} name='special_request'/>
                <br/>

                
                <label>Client Name </label><br></br>
                <input type='text' value={this.state.client_id} onChange={this.handleChange} name='client_id'/>
                </div><br/>

                <input type='submit' value='Edit Reservation' />


            </form>

            </>
        );
    }
}

const mapStateToProps = state => {
    return { reservations: state.reservations }
}

export default connect(mapStateToProps, { editReservation })(EditReservationForm);