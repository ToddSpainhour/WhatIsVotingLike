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
      <main className="OutsidePollingPlace">
        <h2>{this.props.slides[3].slideTitle}</h2>
          <article>
          <h5>{this.props.slides[3].slideBodyText}</h5>
          <img src={this.props.slides[3].imageUrl} className="outside-image"alt="Campaign signs next to road" />
          </article>

          <button onClick={this.props.ChangeOutsideCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./register' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default OutsidePollingPlace;
