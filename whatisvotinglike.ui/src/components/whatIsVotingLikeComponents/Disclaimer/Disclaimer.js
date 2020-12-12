import React from 'react';

import { Link } from 'react-router-dom';

import './Disclaimer.scss';

class Disclaimer extends React.Component {
  render() {
    let nextButton;
    if (this.props.disclaimerComplete === true) {
      nextButton = <Link to='./intro' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <div className="Disclaimer">
        <h5>Disclaimer</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current disclaimerComplete status: {this.props.disclaimerComplete.toString()}</p>

        <button onClick={this.props.ChangeDisclaimerCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default Disclaimer;
