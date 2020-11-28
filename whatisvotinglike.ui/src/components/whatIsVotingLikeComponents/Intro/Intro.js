import React from 'react';

import { Link } from 'react-router-dom';

import './Intro.scss';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <h5>Intro</h5>
        <div className="module-navigation">
          <Link to='./home' className="btn btn-light">Previous</Link>
          <Link to='./conclusion' className="btn btn-light">Next</Link>
        </div>
      </div>
    );
  }
}

export default Intro;
