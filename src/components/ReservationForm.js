import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

import { addReservation } from '../actions/reservationsActions'

class ReservationsForm extends Component {

    state = { 
        desired_date: '',
        desired_time: '',
        special_request: '',
        tour_id: '',
        client_id: ''
    }

    // handleChange = e => {
    //     const { name, value } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.addGrad(this.state)
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Desired_date</label>
                <input type='text' value={this.state.desired_date} onChange={this.handleChange} name='desired_date'/>
                <br/>

                <label>Desired_time</label>
                <input type='text' value={this.state.desired_time} onChange={this.handleChange} name='desired_time'/>
                <br/>

                <label>Special_request</label>
                <input type='text' value={this.state.special_request} onChange={this.handleChange} name='special_request'/>
                <br/>

                <label>Tour_id</label>
                <input type='text' value={this.state.tour_id} onChange={this.handleChange} name='tour_id'/>
                <br/>

                <input type='submit' value='Create Reservation' />


            </form>
        );
    }
}

export default connect(null, { addReservation })(ReservationsForm);