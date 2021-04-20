// import { useParams } from 'react-router';

export const fetchReservations = () => {
    
    return (dispatch) => {
        // const { id } = useParams();
        // fetch(`http://localhost:3000/clients/${id}/reservations`)
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

export const editReservation = reservation => {
    return dispatch => {
        dispatch({type: 'EDIT_RESERVATION', payload: reservation})
        fetch(`http://localhost:3000/reservations/${reservation.id}`, {
            method: 'PATCH',
            body: JSON.stringify(reservation),
            headers: { 'Content-Type': 'application/json'}
        })
        
    }
}

export const deleteReservation = reservation => {
    return dispatch => {
        dispatch({type: 'DELETE_RESERVATION', payload: reservation.id})
        fetch(`http://localhost:3000/reservations/${reservation.id}`, {
            method: 'DELETE',
            body: JSON.stringify(reservation),
            headers: { 'Content-Type': 'application/json'}
        })
        
    }
}