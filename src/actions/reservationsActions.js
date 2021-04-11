

export const fetchReservations = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/reservations')
        .then(resp => resp.json())
        .then(reservations => dispatch({ type: 'FETCH_RESERVATIONS', payload: reservations}))
    }
}

export const addReservation = (reservation) => {
    return (dispatch) => {
        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(reservation => dispatch({ type: 'ADD_RESERVATION', payload: reservation}))
    }
}