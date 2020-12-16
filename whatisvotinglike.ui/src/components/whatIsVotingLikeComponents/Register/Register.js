import React from 'react';

import { Link } from 'react-router-dom';

import './Register.scss';

class Register extends React.Component {
  state = {
    citizenBtnClicked: false,
    tnResidentBtnClicked: false,
    ageBtnClicked: false,
    felonyBtnClicked: false,
  }

    componentDidUpdate = () => {
      if (this.state.ageBtnClicked && this.state.tnResidentBtnClicked && this.state.ageBtnClicked && this.state.felonyBtnClicked === true) {
        if (this.props.registerComplete === false) {
          this.props.ChangeRegisterCompletedStatus();
        }
      }
    }

    render() {
      let citizenText;
      if (this.state.citizenBtnClicked === true) {
        citizenText = <h6>You must be a U.S. Citizen</h6>;
      }

      let residentText;
      if (this.state.tnResidentBtnClicked === true) {
        residentText = <h6>You must be a resident of Tennessee</h6>;
      }

      let ageText;
      if (this.state.ageBtnClicked === true) {
        ageText = <h6>You must be at least 18 years old on/or before the next election</h6>;
      }

      let felonyText;
      if (this.state.felonyBtnClicked === true) {
        felonyText = <h6>If you have been convicted of a felony, your eligibility to register and vote depends upon the crime you were convicted of and the date of your conviction.
                          If your conviction made you ineligible, you may regain your eligibility if your conviction has been expunged or if you have had your voting rights restored,
                          unless you were convicted of a crime that rendered you permanently ineligible to vote.</h6>;
      }

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
                  <button className="btn btn-light citizen-btn" onClick={() => this.setState({ citizenBtnClicked: true })}>1</button>
                </div>
                <div className="box-2">
                  <button className="btn btn-light tn-resident-btn" onClick={() => this.setState({ tnResidentBtnClicked: true })}>2</button>
                </div>
                <div className="box-3">
                  <button className="btn btn-light age-btn" onClick={() => this.setState({ ageBtnClicked: true })}>3</button>
                </div>
                <div className="box-4">
                  <button className="btn btn-light felony-btn" onClick={() => this.setState({ felonyBtnClicked: true })}>4</button>
                </div>
              </div>

              <div className="rollover-message-container col-9">
                <h6>This is the message to corrospond with the rollover boxes</h6>
                {citizenText}
                {residentText}
                {ageText}
                {felonyText}
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

          <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./intro' className="btn btn-light m-3">Previous</Link>
            {nextButton}
          </div>
        </main>
      );
    }
}

export default Register;
