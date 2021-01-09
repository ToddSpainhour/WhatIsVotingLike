import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import './InsidePollingPlace.scss';

class InsidePollingPlace extends React.Component {
  componentDidMount() {
    setTimeout(this.props.ChangeInsideCompletedStatus, 100);
  }

  render() {
    if (this.props.slides.length === 0) {
      return <Redirect to="/home" />;
    }

    let nextButton;
    if (this.props.insideComplete === true) {
      nextButton = <Link to='./checkIn' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }
    return (
      <main className="InsidePollingPlace">
        <div className="inside-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./outsidePollingPlace' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[4].slideTitle}</h2>
          <h5>{this.props.slides[4].slideBodyText}</h5>
          <img src={this.props.slides[4].imageUrl} className="polling-location-image" alt="Polling Location"/>
        </div>
      </main>
    );
  }
}

export default InsidePollingPlace;
