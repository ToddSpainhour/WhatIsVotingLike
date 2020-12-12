import React from 'react';

import { Link } from 'react-router-dom';

import './Disclaimer.scss';

class Disclaimer extends React.Component {
  render() {
    if (!this.props.slides[0]) return null;

    let nextButton;
    if (this.props.disclaimerComplete === true) {
      nextButton = <Link to='./intro' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <main className="Disclaimer">
        <h2>{this.props.slides[1].slideTitle}</h2>

        <article>
          <h5>{this.props.slides[1].slideBodyText}</h5>
          <input type="checkbox" id="disclaimer-checkbox" onChange={this.props.ChangeDisclaimerCompletedStatus} name="disclaimer-checkbox"/>
          <label htmlFor="disclaimer-checkbox">I Understand</label>
        </article>

        <img src={this.props.slides[1].imageUrl} className="disclaimer-image" alt="Polling Location"/>

        <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </nav>
      </main>
    );
  }
}

export default Disclaimer;
