import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function TicketList(props) {
    return (
        <div>
            <h1>Tickets-{props.ticket.length}</h1>
            {/* <table border="2">
                <thead>
                    <tr>
                        <th>code no</th>
                        <th>Customers</th>
                        <th>departments</th>
                        <th>employees</th>
                        <th>message</th>
                        <th>priyority</th>
                        <th>Action</th>
                        <th>Remove</th>
                        <th>completed</th>
                    </tr>
                    </thead>
            </table> */}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        ticket: state.tickets
    }
}
export default connect(mapStateToProps)(TicketList)