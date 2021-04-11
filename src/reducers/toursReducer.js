export const toursReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_TOURS':
            return action.payload
        default:
            return state
    }
}