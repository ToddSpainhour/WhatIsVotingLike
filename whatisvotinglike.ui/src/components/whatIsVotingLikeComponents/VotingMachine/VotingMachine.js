import React from 'react';

import { Link } from 'react-router-dom';

import './VotingMachine.scss';

class VotingMachine extends React.Component {
  render() {
    let nextButton;
    if (this.props.votingMachineComplete === true) {
      nextButton = <Link to='./sticker' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="VotingMachine">
        <h5>Voting Machine</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current VotingMachineComplete status: {this.props.votingMachineComplete.toString()}</p>

        <button onClick={this.props.ChangeVotingMachineCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./checkIn' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default VotingMachine;
