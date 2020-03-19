import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { findCustomers } from "../../selectors/findCustomers";

function CustomerShow(props) {
  const { _id,name, email, mobile } = props.customer || {};
  return (
    <div>
      {/*  <h1>Customers Show-{_id}</h1>
      <p>
        {name}
        <br />
        {email}
        <br /> {mobile} 
      </p> */}
       {props.customer ? (
        <div>
          <h1>Customers Show-{_id}</h1>
          <Link to={`/customers/edit/${_id}`}>Edit</Link>
          <p>
            {name}
            <br />
            {email}
            <br /> {mobile}
          </p>
          <Link to="/customers">back</Link>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )} 
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    customer: findCustomers(state.customers, id)
  };
};
export default connect(mapStateToProps)(CustomerShow);
