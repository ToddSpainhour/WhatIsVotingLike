import React from 'react';

import { Link } from 'react-router-dom';

import './InsidePollingPlace.scss';

class InsidePollingPlace extends React.Component {
  render() {
    let nextButton;
    if (this.props.insideComplete === true) {
      nextButton = <Link to='./checkIn' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <main className="InsidePollingPlace">
        <h2>{this.props.slides[4].slideTitle}</h2>
        <h5>{this.props.slides[4].slideBodyText}</h5>
        <button onClick={this.props.ChangeInsideCompletedStatus} >Click to fulfill slide requirements</button>
        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./outside' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default InsidePollingPlace;
