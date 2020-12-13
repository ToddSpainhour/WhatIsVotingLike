import React from 'react';

import { Link } from 'react-router-dom';

import './Register.scss';

class Register extends React.Component {
  render() {
    let nextButton;
    if (this.props.registerComplete === true) {
      nextButton = <Link to='./outsidePollingPlace' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <main className="Register">
        <h2>{this.props.slides[2].slideTitle}</h2>
        <article>
          <h5>{this.props.slides[2].slideBodyText}</h5>
          <div className="register-button-container">
            <div>
              <h6>Need to register to vote in Tennessee?</h6>
              <a className="btn btn-light" href="https://ovr.govote.tn.gov/" target="_blank" rel="noreferrer nofollow">Visit Tennessee's Online Voter Registration Portal.</a>
            </div>
            <div>
              <h6>Already registered? Confirm your registration by clicking the link below.</h6>
              <a className="btn btn-light" href="https://tnmap.tn.gov/voterlookup/" target="_blank" rel="noreferrer nofollow">Confirm Your Registration in Tennessee.</a>
            </div>
          </div>
        </article>
        <button onClick={this.props.ChangeRegisterCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./intro' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default Register;
