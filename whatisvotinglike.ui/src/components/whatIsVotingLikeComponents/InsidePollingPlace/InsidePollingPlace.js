import React from 'react';

import { Link } from 'react-router-dom';

import './InsidePollingPlace.scss';

class InsidePollingPlace extends React.Component {
  componentDidMount() {
    setTimeout(this.props.ChangeInsideCompletedStatus, 5000);
  }

  render() {
    let nextButton;
    if (this.props.insideComplete === true) {
      nextButton = <Link to='./checkIn' className="btn m-3 active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn m-3 disabled-next-button">Next</button>;
    }
    return (
      <main className="InsidePollingPlace">
        <div className="inside-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./outsidePollingPlace' className="btn m-3 previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[4].slideTitle}</h2>
          <h5>{this.props.slides[4].slideBodyText}</h5>
        </div>
      </main>
    );
  }
}

export default InsidePollingPlace;
