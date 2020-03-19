import React from 'react'
import { connect } from 'react-redux'
import { startRegister } from '../actions/register'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    // console.log(formData)
    const redirect = () => {
      return this.props.history.push('/users/login')
    }
    this.props.dispatch(startRegister(formData, redirect))
    // this.props.history.push('/users/login')
  }
  render() {
    return (
      <div >
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <label>username
                    <input name='username' id='username' type='text' value={this.state.name} onChange={this.handleChange} />
          </label><br />
          <label>email
                    <input name='email' id='email' type='text' value={this.state.email} onChange={this.handleChange} />
          </label><br />
          <label>password
                    <input name='password' id='password' type='password' value={this.state.password} onChange={this.handleChange} />
          </label><br />
          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }
}
export default connect()(Register)