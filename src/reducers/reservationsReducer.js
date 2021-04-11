
export const reservationsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_RESERVATIONS':
            return action.payload
        default:
            return state
    }
}