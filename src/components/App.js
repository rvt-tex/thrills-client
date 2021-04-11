import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReservationsContainer from './ReservationsContainer';
import Home from './Home';
import Tours from './Tours'
import ReservationList from '../components/ReservationList';


function App() {
   
    // const handleLogout = () => {
    //     clearToken()
    //   }

    return (
    
        <Router>
          <div className="App">
          {/* <Navbar /> */}
            <switch>
              
              <Route exact path="/" component={Home}/>
              <Route path="/tours" component={Tours}/>
              <Route path="/reservations" component={ReservationsContainer}/>
              {/* <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/> */}
    
            </switch>
    
            {/* <button onClick={handleLogout}>Log Out</button> */}
          </div>
        </Router>
        
      );



}

export default App;


