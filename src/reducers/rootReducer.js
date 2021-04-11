import { combineReducers } from 'redux'
import { reservationsReducer } from './reservationsReducer'
import { clientsReducer } from './clientsReducer'



export const rootReducer = combineReducers({
    reservations: reservationsReducer,
    clients: clientsReducer
});