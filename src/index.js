
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import App from './App';
import { Provider } from 'react-redux'
import { startSetUser } from './actions/register'
import { startSetCustomers } from './actions/customers'
import { startSetDepartments } from './actions/departments'
import { startSetEmployees } from './actions/employees'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})
console.log(store.getState())

//handle Page reloads
if (localStorage.getItem('authToken')) {
    store.dispatch(startSetUser())
    store.dispatch(startSetCustomers())
   store.dispatch(startSetDepartments())
   store.dispatch(startSetEmployees())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));