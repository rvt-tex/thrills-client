
export const reservationsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RESERVATIONS':
            return action.payload
        case 'ADD_RESERVATION':
            return [...state, action.payload]
        default:
            return state
    }
}