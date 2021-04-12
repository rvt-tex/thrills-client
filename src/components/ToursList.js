import React from 'react';
import { connect } from 'react-redux';
import './ToursList.css';
import './App.css';

function ToursList ({tours}) {
    return (
        <div> 
          
            {tours.map(tour => 
                <div>
                    <div className="container">
                    <div class="title"><h1>{tour.title}</h1> </div>
                        <ul className='tours-lists-items' key={tour.id}><br></br>
                            <div> <img src={tour.img} class="rounded" width= '800px' height='600px' /> </div> 
                            <div className='desc'>{tour.description}</div>
                            <p className='desc'> {tour.duration} | ${tour.price} </p>
                        </ul>
                    </div>
                    </div>
            )} 
        </div>
                            
    );
};

const mapStateToProps = state => {
    return { tours: state.tours }
}


export default connect(mapStateToProps)(ToursList);


