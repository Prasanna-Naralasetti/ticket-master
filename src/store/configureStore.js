import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import registerReducer from '../reducers/register'
import customerReducer from '../reducers/customers'
import departmentsReducer from '../reducers/departments'
import employeesReducer from '../reducers/employees'
import ticketsReducer from '../reducers/tickets'

const configureStore = () => {
    const store = createStore(combineReducers({
        register: registerReducer,
        customers:customerReducer,
        departments:departmentsReducer,
        employees:employeesReducer,
        tickets: ticketsReducer

    }), applyMiddleware(thunk))
    return store
}

export default configureStore