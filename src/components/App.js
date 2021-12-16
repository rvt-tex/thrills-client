import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReservationsContainer from './ReservationsContainer';
import Home from './Home';
import ToursList from './ToursList'
import ReservationList from '../components/ReservationList';
import Navbar from './Navbar';
import ToursContainer from '../components/ToursContainer';
import './App.css';


function App() {
   
    return (
    
        <Router>
          <div className="App">
          <Navbar />
            <switch>
              
              <Route exact path="/" component={Home}/>
              <Route path="/tours" component={ToursContainer}/>
              <Route path="/reservations" component={ReservationsContainer}/>
      
            </switch>
          </div>
        </Router>
        
      );



}

export default App;


