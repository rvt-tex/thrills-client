

export const fetchReservations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reservations')
        .then(resp => resp.json())
        .then(reservations => dispatch({ type: 'FETCH_RESERVATIONS', payload: reservations}))
    }
}

// export const addGrad = (grad) => {
//     return dispatch => {
//         fetch('http://127.0.0.1:3000/grads', {
//             method: 'POST',
//             body: JSON.stringify(grad),
//             headers: { 'Content-Type': 'application/json'}
//         })
//         .then(resp => resp.json())
//         .then(grad => dispatch({ type: 'ADD_GRAD', payload: grad}))
//     }
// }