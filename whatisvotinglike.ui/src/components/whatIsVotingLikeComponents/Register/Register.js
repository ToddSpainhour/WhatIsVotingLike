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
        citizenText = <h6 className="revealed-text">You must be a U.S. Citizen</h6>;
      }

      let residentText;
      if (this.state.tnResidentBtnClicked === true) {
        residentText = <h6 className="revealed-text">You must be a resident of Tennessee</h6>;
      }

      let ageText;
      if (this.state.ageBtnClicked === true) {
        ageText = <h6 className="revealed-text">You must be at least 18 years old on/or before the next election</h6>;
      }

      let felonyText;
      if (this.state.felonyBtnClicked === true) {
        felonyText = <h6 className="revealed-text">If you have been convicted of a felony, your eligibility to register and vote depends upon the crime you were convicted of
                          and the date of your conviction. If your conviction made you ineligible, you may regain your eligibility if your conviction has been expunged or if
                          you have had your voting rights restored, unless you were convicted of a crime that rendered you permanently ineligible to vote.</h6>;
      }

      let nextButton;
      if (this.props.registerComplete === true) {
        nextButton = <Link to='./outsidePollingPlace' className="btn active-next-button">Next</Link>;
      } else {
        nextButton = <button className="btn disabled-next-button">Next</button>;
      }

      return (
        <main className="Register">
          <div className="register-container">
            <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
              <Link to='./intro' className="btn previous-button">Previous</Link>
              {nextButton}
            </nav>
            <h2>{this.props.slides[2].slideTitle}</h2>
            <article>
              <h5>{this.props.slides[2].slideBodyText}</h5>
              <h5 className="slide-instructions">Click on the buttons below to see what it takes to register to vote in Tennessee.</h5>

                <div className="box-container">
                  <div className="box-1">
                    <button className="btn btn-light citizen-btn reveal-btn" onClick={() => this.setState({ citizenBtnClicked: true })}>1</button>
                  </div>
                  <div className="box-2">
                    <button className="btn btn-light tn-resident-btn reveal-btn" onClick={() => this.setState({ tnResidentBtnClicked: true })}>2</button>
                  </div>
                  <div className="box-3">
                    <button className="btn btn-light age-btn reveal-btn" onClick={() => this.setState({ ageBtnClicked: true })}>3</button>
                  </div>
                  <div className="box-4">
                    <button className="btn btn-light felony-btn reveal-btn" onClick={() => this.setState({ felonyBtnClicked: true })}>4</button>
                  </div>
                </div>

                <div className="rollover-message-container">
                  {citizenText}
                  {residentText}
                  {ageText}
                  {felonyText}
                </div>

            </article>
          </div>
        </main>
      );
    }
}

export default Register;
