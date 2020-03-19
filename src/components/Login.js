import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/register'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      email: this.state.email,
      password: this.state.password
    }
    const redirect = () => {
      return this.props.history.push('/')
    }
    this.props.dispatch(startLogin(formData, redirect))
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type='email' value={this.state.email} onChange={this.handleEmail} /><br />
          <label>Password</label>
          <input type='password' value={this.state.password} onChange={this.handlePassword} /><br />
          <input type='submit' value='Login'></input>
        </form>
      </div>
    )
  }
}

export default connect()(Login)