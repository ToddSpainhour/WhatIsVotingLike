import React from 'react';

import { Link } from 'react-router-dom';

import './Conclusion.scss';

class Conclusion extends React.Component {
  render() {
    return (
      <div className="Conclusion">
        <h5>Conclusion</h5>
        <Link to='./home' className="btn btn-small complete-training-button">Complete Training</Link>
      </div>
    );
  }
}

export default Conclusion;
