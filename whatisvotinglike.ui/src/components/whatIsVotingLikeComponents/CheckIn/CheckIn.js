import React from 'react';

import { Link } from 'react-router-dom';

import './CheckIn.scss';

class CheckIn extends React.Component {
  render() {
    let nextButton;
    if (this.props.checkInComplete === true) {
      nextButton = <Link to='./votingMachine' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }
    return (
      <main className="CheckIn">
        <h2>{this.props.slides[5].slideTitle}</h2>
        <article>
          <h5>{this.props.slides[5].slideBodyText}</h5>
          <div className="checkin-content-container">

            <div>
              <img src={this.props.slides[4].imageUrl} alt="Poll Worker Checking ID"/>
            </div>
            <div className="photo-id-container">
              <h3>What IDs are acceptable?</h3>
              <h6>Tennessee driver license with your photo</h6>
              <h6>United States Passport</h6>
              <h6>Photo ID issued by the Tennessee Department of Safety and Homeland Security</h6>
              <h6>Photo ID issued by the federal or Tennessee state government</h6>
              <h6>United States Military photo ID</h6>
              <h6>Tennessee handgun carry permit with your photo</h6>
              <h3>What IDs are not acceptable?</h3>
              <h6>College student IDs and photo IDs not issued by the federal or Tennessee state government are NOT acceptable.</h6>
              <h6> This includes county or city issued photo IDs, such as library cards, and photo IDs issued by other states.</h6>
            </div>
          </div>
        </article>
        <button onClick={this.props.ChangeCheckInCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./insidePollingPlace' className="btn btn-light m-3">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default CheckIn;
