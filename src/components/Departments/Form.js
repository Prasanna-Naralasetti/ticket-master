import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { startAddDepartment} from '../../actions/departments'

class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
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
            name: this.state.name,
        }
        //console.log(formData)


        this.props.dispatch(startAddDepartment(formData))
        
    }
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <label>Add Department
                    <input name='name' id='name' type='text' value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type='submit'value='Add Department' />
                </form>
            </div>
        )
    }
}
// const mapStateToProps = (state, props) => {
//     //console.log('form',props)
//     const id = props.match.params.id
//     return {
//         customer: findCustomers(state.customers, id)
//     }
// }
export default connect()(DepartmentForm)