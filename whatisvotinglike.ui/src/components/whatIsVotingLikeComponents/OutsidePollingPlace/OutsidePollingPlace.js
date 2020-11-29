import React from 'react';

import { Link } from 'react-router-dom';

import './OutsidePollingPlace.scss';

class OutsidePollingPlace extends React.Component {
  render() {
    return (
      <div className="OutsidePollingPlace">
        <h5>Outside Polling Place</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./register' className="btn btn-light m-3">Previous</Link>
          <Link to='./insidePollingPlace' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default OutsidePollingPlace;
