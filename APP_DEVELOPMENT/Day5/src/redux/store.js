
import { createStore, combineReducers } from 'redux';

const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
const REMOVE_APPOINTMENT = 'REMOVE_APPOINTMENT';

const initialState = {
  appointments: [],
};

const appointmentReducer = (state = initialState.appointments, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT:
      return [...state, action.payload];
    case REMOVE_APPOINTMENT:
      return state.filter(appointment => appointment.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  appointments: appointmentReducer,
});

const store = createStore(rootReducer);

export default store;
