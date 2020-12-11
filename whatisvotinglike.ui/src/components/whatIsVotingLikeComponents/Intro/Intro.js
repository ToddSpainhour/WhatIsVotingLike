import React from 'react';

import { Link } from 'react-router-dom';

import './Intro.scss';

class Intro extends React.Component {
  render() {
    let nextButton;
    if (this.props.introComplete === true) {
      nextButton = <Link to='./disclaimer' className="btn btn-light m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-light m-3 disabled-next-button">Disabled Next</button>;
    }

    return (
      <div className="Intro">
        <h5>Intro</h5>
        <h6>Some slides will disable the next button until the user performs some action.</h6>
        <p>Current IsSlideComplete status: {this.props.introComplete.toString()}</p>
        <button onClick={this.props.ChangeIntroCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./home' className="btn btn-light m-3 previous-button">Previous</Link>
          {nextButton}
        </div>
      </div>
    );
  }
}

export default Intro;
