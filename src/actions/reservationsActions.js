
import { FETCH_RESERVATIONS } from '../reducers/reservationsReducer.js';
import { ADD_RESERVATION } from '../reducers/reservationsReducer.js';
import { EDIT_RESERVATION } from '../reducers/reservationsReducer.js';
import { DELETE_RESERVATION } from '../reducers/reservationsReducer.js';


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





