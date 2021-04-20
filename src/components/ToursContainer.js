import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTours } from '../actions/toursActions'
import ToursList from './ToursList';



class ToursContainer extends Component {

    componentDidMount() {
        this.props.fetchTours();
    }
    
    render() {
        return (
            <div>
                <h1>OUR TOURS</h1>
            
                <ToursList />
            </div>
        );
    }
}

export default connect(null, {fetchTours})(ToursContainer);