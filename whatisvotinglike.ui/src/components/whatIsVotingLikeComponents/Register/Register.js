import React from 'react';

import { Link } from 'react-router-dom';

import './Register.scss';

class Register extends React.Component {
  state = {
    citizenBtnHovered: false,
    tnResidentBtnHovered: false,
    ageBtnHovered: false,
    felonyBtnHovered: false,
  }

changeCitizenBtnViewedState = () => {
  console.log('you entered citizen');
  this.setState({ citizenBtnHovered: true });
};

render() {
// let displayData;
// if (citizenBtnHovered === true )

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

        <div className="rollover-container">
          <div className="box-container col-3">
            <div className="box-1">
              {/* <button className="btn btn-light citizen-btn" onMouseEnter={this.changeCitizenBtnViewedState} onMouseLeave={() => console.log('on mouse leave')}>1</button> */}
              <button className="btn btn-light citizen-btn"
                onMouseEnter={() => this.setState({ citizenBtnHovered: true })}
                onMouseLeave={() => this.setState({ citizenBtnHovered: false })}
              >1</button>
            </div>
            <div className="box-2">
              <button className="btn btn-light tn-resident-btn"
                onMouseEnter={() => this.setState({ tnResidentBtnHovered: true })}
                onMouseLeave={() => this.setState({ tnResidentBtnHovered: false })}
              >2</button>
            </div>
            <div className="box-3">
              <button className="btn btn-light age-btn"
                onMouseEnter={() => this.setState({ ageBtnHovered: true })}
                onMouseLeave={() => this.setState({ ageBtnHovered: false })}
              >3</button>
            </div>
            <div className="box-4">
              <button className="btn btn-light felony-btn"
              onMouseEnter={() => this.setState({ felonyBtnHovered: true })}
              onMouseLeave={() => this.setState({ felonyBtnHovered: false })}
              >4</button>
            </div>
          </div>

          <div className="rollover-message-container col-9">
            <h6>This is the message to corrospond with the rollover boxes</h6>
          </div>
        </div>

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
