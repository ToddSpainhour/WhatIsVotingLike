import React from 'react';

import { Link } from 'react-router-dom';

import './Intro.scss';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <h5>Intro</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn btn-light m-3">Previous</Link>
          <Link to='./disclaimer' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Intro;
