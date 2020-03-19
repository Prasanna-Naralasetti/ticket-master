import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import CustomerList from './components/Customers/List'
import CustomerShow from './components/Customers/Show'
import CustomerNew from './components/Customers/New'
import CustomerEdit from './components/Customers/Edit'
import DepartmentList from './components/Departments/List'
import EmployeesList from './components/Employees/List'
import EmployeeForm from './components/Employees/Form'
import EmployeeShow from './components/Employees/Show'
import EmployeeEdit from './components/Employees/Edit'
import TicketList from './components/Tickets/List'
import { connect } from 'react-redux'
function App(props) {
  return (
    <BrowserRouter>
    <div>
      <h1>Ticket Master</h1>
      {/* <Link to="/" >Home</Link>
      <Link to="/users/login">Login</Link>
      <Link to="/users/register">Register</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/users/account">Account</Link>
        <Link to="/users/login">Logout</Link> */}
        {
       Object.keys(props.register).length == 0 ? (
          <div>
            <Link to="/users/login">Login</Link>
            <Link to="/users/register">Register</Link>
          </div>
       ) : (
            <div>
              <Link to="/customers">Customers</Link>{" | "}
              <Link to="/departments">Departments</Link>{" | "}
              <Link to="/employees">Employees</Link>{" | "}
                <Link to="/tickets">Tickets</Link>{" | "}
                <Link to="/users/account">Account</Link>{" | "}
              <Link to="#">Logout</Link>
            </div>
         )
     } 
     <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/users/login" component={Login}  exact/>
      <Route path="/users/register" component={Register} exact />
      <Route path="/users/account" component={Account} />
      <Route path="/customers" component={CustomerList} exact={true}/>
         <Route path="/customers/edit/:id" component={CustomerEdit}/>
        <Route path="/customer/new" component={CustomerNew} exact />
      <Route path="/customers/:id" component={CustomerShow} exact/>
      <Route path="/departments" component={DepartmentList}exact/>
      <Route path="/employees" component={EmployeesList}exact/>
      <Route path="/employees/new" component={EmployeeForm}exact/>
      <Route path="/employees/:id" component={EmployeeShow}exact/>
      <Route path="/employees/edit/:id" component={EmployeeEdit}exact/>
      <Route path="/tickets" component={TicketList}exact/>
      
        </Switch>
      </div>
    </BrowserRouter>
  )
}
const mapStateToProps = (state) => {
  return {
    register: state.register
  }
}
export default connect(mapStateToProps)(App);