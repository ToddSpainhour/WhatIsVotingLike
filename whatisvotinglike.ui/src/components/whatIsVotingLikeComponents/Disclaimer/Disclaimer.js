import React from 'react';

import { Link } from 'react-router-dom';

import './Disclaimer.scss';

class Disclaimer extends React.Component {
  render() {
    return (
      <div className="Disclaimer">
        <h5>Disclaimer</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn btn-light m-3">Previous</Link>
          <Link to='./intro' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
