import React from 'react';

import { Link } from 'react-router-dom';

import './Conclusion.scss';

class Conclusion extends React.Component {
  render() {
    return (
      <div className="Conclusion">
        <h5>Conclusion</h5>
        <Link to='./home' className="btn btn-small complete-training-button">Complete Training</Link>

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

      </div>
    );
  }
}

export default Conclusion;
