import React from 'react';

import { Link } from 'react-router-dom';

import './CheckIn.scss';

class CheckIn extends React.Component {
  render() {
    let nextButton;
    if (this.props.checkInComplete === true) {
      nextButton = <Link to='./votingMachine' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="CheckIn">
        <h5>Check In</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current disclaimerComplete status: {this.props.checkInComplete.toString()}</p>

        <button onClick={this.props.ChangeCheckInCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./insidePollingPlace' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default CheckIn;
