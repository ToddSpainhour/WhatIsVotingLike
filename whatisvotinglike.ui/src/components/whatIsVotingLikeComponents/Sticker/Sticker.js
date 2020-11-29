import React from 'react';

import { Link } from 'react-router-dom';

import './Sticker.scss';

class Sticker extends React.Component {
  render() {
    return (
      <div className="Sticker">
        <h5>Sticker</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./votingMachine' className="btn btn-light m-3">Previous</Link>
          <Link to='./conclusion' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default Sticker;
