import React from 'react';

import { Link } from 'react-router-dom';

import './InsidePollingPlace.scss';

class InsidePollingPlace extends React.Component {
  render() {
    return (
      <div className="InsidePollingPlace">
        <h5>Inside Polling Place</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./outside' className="btn btn-light m-3">Previous</Link>
          <Link to='./checkIn' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default InsidePollingPlace;
