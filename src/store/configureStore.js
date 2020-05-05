import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import customersReducer from '../reducers/customersReducer'
import departmentsReducer from '../reducers/departmentsReducer'
import employeesReducer from '../reducers/employeesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        customers : customersReducer,
        departments : departmentsReducer,
        employees : employeesReducer,
      
    }),applyMiddleware(thunk))
    return store
}

export default configureStore