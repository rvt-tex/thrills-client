import React, { Component } from 'react';
import { addReservation } from '../actions/reservationsActions';
import {connect} from 'react-redux';


class ReservationForm extends Component {
   
    state = { 
        desired_date: '',
        desired_time: '',
        special_request: '',
        tour_id: '',
        client_id: '',
    }
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    resetForm = () => {
        this.setState({
            desired_date: '',
            desired_time: '',
            special_request: '',
            tour_id: '',
            client_id: ''
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addReservation(this.state)
        this.resetForm()
    }

   
    render() {
        return (

            <div class="card-columns">
            <form onSubmit={this.handleSubmit}>
               
            <fieldset>
                <label>Tours:</label>
                <select name="tour_id" onChange={this.handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="1">Airport Transfer</option>
                    <option value="2">Negril Party Bus</option>
                    <option value="3">Ocho Rios Highlight</option>
                    <option value="4">Far East</option>
                    <option value="5">City</option>
                    <option value="6">Montego Bay Highlights</option>
                    <option value="7">Country Side</option>
                    <option value="8">Farm</option>
                    <option value="9">Bamboo Rafting</option>
                    <option value="10">Horse Back Riding</option>
                    <option value="11">Swimming with the Dolphins</option>
                    <option value="12">Luminous Lagoons</option>
                    <option value="13">Montego Bay Night Life</option>
                </select>
            </fieldset>

                <br />
                <label>Date:</label>
                <input type="text" value={this.state.desired_date} onChange={this.handleChange} name="desired_date"/>
                <br />
                <label>Time:</label>
                <input type="text" value={this.state.desired_time} onChange={this.handleChange} name="desired_time"/>
                <br />
                <label>Request:</label>
                <input type="text" value={this.state.special_request} onChange={this.handleChange} name="special_request"/>
                <br />
                <label>Client:</label>
                <input type="text" value={this.state.client_id} onChange={this.handleChange} name="client_id"/>
                <br />
                <input type='submit' value="Create" />
            </form>
            </div>
        )
    }
}

export default connect(null, { addReservation })(ReservationForm);