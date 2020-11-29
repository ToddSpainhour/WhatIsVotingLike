import React from 'react';

import { Link } from 'react-router-dom';

import './Conclusion.scss';

class Conclusion extends React.Component {
  render() {
    return (
      <div className="Conclusion">
        <h5>Conclusion</h5>
        <div className="module-navigation  d-flex justify-content-sm-end justify-content-center">
          <Link to='./sticker' className="btn btn-light m-3">Previous</Link>
          <Link to='./home' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Conclusion;
