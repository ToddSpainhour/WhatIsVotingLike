import React from 'react';

import { Link } from 'react-router-dom';

import './Register.scss';

class Register extends React.Component {
  render() {
    let nextButton;
    if (this.props.registerComplete === true) {
      nextButton = <Link to='./outsidePollingPlace' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="Register">
        <h5>Register</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current disclaimerComplete status: {this.props.registerComplete.toString()}</p>

        <button onClick={this.props.ChangeRegisterCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./intro' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default Register;
