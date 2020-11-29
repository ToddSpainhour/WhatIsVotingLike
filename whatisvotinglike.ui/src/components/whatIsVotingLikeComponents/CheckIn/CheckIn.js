import React from 'react';

import { Link } from 'react-router-dom';

import './CheckIn.scss';

class CheckIn extends React.Component {
  render() {
    return (
      <div className="CheckIn">
        <h5>Check In</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./insidePollingPlace' className="btn btn-light m-3">Previous</Link>
          <Link to='./votingMachine' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default CheckIn;
