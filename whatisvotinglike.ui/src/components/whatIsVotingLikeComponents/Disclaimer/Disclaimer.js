import React from 'react';

import { Link } from 'react-router-dom';

import './Disclaimer.scss';

class Disclaimer extends React.Component {
  render() {
    if (!this.props.slides[0]) return null;

    let nextButton;
    if (this.props.disclaimerComplete === true) {
      nextButton = <Link to='./intro' className="btn active-next-button m-3">Next</Link>;
    } else {
      nextButton = <button className="btn m-3 disabled-next-button">Next</button>;
    }
    return (
      <main className="Disclaimer">
        <nav className="navbar fixed-bottom module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn m-3 previous-button">Previous</Link>
          {nextButton}
        </nav>
        <h2>{this.props.slides[1].slideTitle}</h2>

        <article>
          <h5>{this.props.slides[1].slideBodyText}</h5>
          <input type="checkbox" id="disclaimer-checkbox" onChange={this.props.ChangeDisclaimerCompletedStatus} name="disclaimer-checkbox"/>
          <label htmlFor="disclaimer-checkbox">I Understand</label>
        </article>

        <img src={this.props.slides[1].imageUrl} className="disclaimer-image" alt="Polling Location"/>
      </main>
    );
  }
}

export default Disclaimer;
