import React from 'react';

import { Link } from 'react-router-dom';

import './Intro.scss';

class Intro extends React.Component {
  render() {
    let nextButton;
    if (this.props.introComplete === true) {
      nextButton = <Link to='./register' className="btn btn-success m-3 next-button">Active Next</Link>;
    } else {
      nextButton = <button className="btn btn-warning m-3 disabled-next-button">Disabled Next</button>;
    }

    return (
      <main className="Intro">
        <h2>{this.props.slides[0].slideTitle}</h2>

        <article>
          <h5>{this.props.slides[0].slideBodyText}</h5>
        <button onClick={this.props.ChangeIntroCompletedStatus} className='btn btn-light'>Let's Get Started</button>
        </article>

        <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./disclaimer' className="btn btn-light m-3 previous-button">Previous</Link>
          {nextButton}
        </nav>
      </main>
    );
  }
}

export default Intro;
