import React from 'react'
import { connect } from 'react-redux'


function Account(props) {
    return (
        <div>
            <h1>User Info</h1>
            <h2>{props.register.username}</h2>
            <h2>{props.register.email}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        register: state.register
    }
}

export default connect(mapStateToProps)(Account)