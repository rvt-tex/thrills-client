
export const reservationsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RESERVATIONS':
            return action.payload
        case 'ADD_RESERVATION':
            return [...state, action.payload]
        case 'EDIT_RESERVATION':
            const reservations = state.reservations.map(reservation => reservation.id !== action.payload.id ? reservation : action.payload )
            return { reservations }   
        case 'DELETE_RESERVATION':
            return  state.filter(reservation => reservation.id !== action.payload )
        default:
            return state
    }
}

