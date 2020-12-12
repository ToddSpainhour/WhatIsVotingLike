import React from 'react';

import { Link } from 'react-router-dom';

import './OutsidePollingPlace.scss';

class OutsidePollingPlace extends React.Component {
  render() {
    let nextButton;
    if (this.props.outsideComplete === true) {
      nextButton = <Link to='./insidePollingPlace' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="OutsidePollingPlace">
        <h5>Outside Polling Place</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current disclaimerComplete status: {this.props.outsideComplete.toString()}</p>

        <button onClick={this.props.ChangeOutsideCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./register' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default OutsidePollingPlace;
