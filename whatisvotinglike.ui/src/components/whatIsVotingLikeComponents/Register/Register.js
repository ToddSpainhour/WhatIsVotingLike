import React from 'react';

import { Link } from 'react-router-dom';

import './Register.scss';

class Register extends React.Component {
  render() {
    return (
      <div className="Register">
        <h5>Register</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./disclaimer' className="btn btn-light m-3">Previous</Link>
          <Link to='./outsidePollingPlace' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Register;
