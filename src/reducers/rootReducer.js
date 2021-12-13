import { combineReducers } from 'redux';
import { reservationsReducer } from './reservationsReducer';
import { clientsReducer } from './clientsReducer';
import { toursReducer } from './toursReducer';



export const rootReducer = combineReducers({
    reservations: reservationsReducer,
    clients: clientsReducer,
    tours: toursReducer
});