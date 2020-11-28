import React from 'react';

import { Link } from 'react-router-dom';

import './Conclusion.scss';

class Conclusion extends React.Component {
  render() {
    return (
      <div className="Conclusion">
        <h5>Conclusion</h5>
        <div className="module-navigation">
          <Link to='./intro' className="btn btn-light">Previous</Link>
          <Link to='./home' className="btn btn-light">Next</Link>
        </div>
      </div>
    );
  }
}

export default Conclusion;
