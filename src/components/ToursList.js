// import React from 'react';
// import { useState, useEffect } from 'react';


// function Tours() {

//   const url = 'http://localhost:3000/tours';
//   const [ data, setData ] = useState([]);


//   useEffect(() => {
//       loadData();
//   }, [url])

//   const loadData = async () => {
//     await fetch(url)
//     .then(response => response.json())
//     .then(returnedData => setData(returnedData));
//   }

//   return (
//     <div>
//       {data.map(tour => (
//         <div key={tour.id}>
//           <h1 className="text-2xl font-bold mb-3">{tour.title} </h1>
//           <img src={tour.img} />
//           <p>{tour.description}</p>
//           <p>{tour.duration} | ${tour.price}</p>
//         </div>
        
//       ))}
//     </div>
//   );

// }

// export default Tours;

import React from 'react';
import { connect } from 'react-redux';

function ToursList ({tours}) {
    return (
        <div>
            <h1>Tours List</h1>
            {tours.map(tour => 
                <ul key={tour.id}>
                    <li >
                        {tour.title}  
                        <img src={tour.img} />  
                        {tour.description} 
                        {tour.duration} | {tour.price}
                    </li>
                </ul>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return { tours: state.tours }
}


export default connect(mapStateToProps)(ToursList);
