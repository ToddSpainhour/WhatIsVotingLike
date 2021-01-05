import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import './Disclaimer.scss';

class Disclaimer extends React.Component {
  render() {
    if (this.props.slides.length === 0) {
      return <Redirect to="/home" />;
    }

    let nextButton;
    if (this.props.disclaimerComplete === true) {
      nextButton = <Link to='./intro' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }
    return (
      <main className="Disclaimer">
        <div className="disclaimer-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./home' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[1].slideTitle}</h2>

          <article>
            <h5>{this.props.slides[1].slideBodyText}</h5>
            <input type="checkbox" id="disclaimer-checkbox" onChange={this.props.ChangeDisclaimerCompletedStatus} name="disclaimer-checkbox"/>
            <label htmlFor="disclaimer-checkbox">I Understand</label>
          </article>

          <img src={this.props.slides[1].imageUrl} className="disclaimer-image" alt="Polling Location"/>
        </div>
      </main>
    );
  }
}

export default Disclaimer;
