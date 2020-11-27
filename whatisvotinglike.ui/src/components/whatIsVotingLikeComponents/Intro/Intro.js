import React from 'react';

import { Link } from 'react-router-dom';

import './Intro.scss';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <h5>Intro</h5>
        <Link to='/conclusion' className="btn btn-danger">To Conclusion</Link>
      </div>
    );
  }
}

export default Intro;
