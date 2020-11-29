import React from 'react';

import { Link } from 'react-router-dom';

import './VotingMachine.scss';

class VotingMachine extends React.Component {
  render() {
    return (
      <div className="VotingMachine">
        <h5>Voting Machine</h5>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./checkIn' className="btn btn-light m-3">Previous</Link>
          <Link to='./sticker' className="btn btn-light m-3">Next</Link>
        </div>
      </div>
    );
  }
}

export default VotingMachine;
