import React from 'react';

import { Link } from 'react-router-dom';

import './OutsidePollingPlace.scss';

class OutsidePollingPlace extends React.Component {
  componentDidMount() {
    setTimeout(this.props.ChangeOutsideCompletedStatus, 100);
  }

  render() {
    let nextButton;
    if (this.props.outsideComplete === true) {
      nextButton = <Link to='./insidePollingPlace' className="btn active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn disabled-next-button">Next</button>;
    }
    return (
      <main className="OutsidePollingPlace">
        <div className="outside-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./register' className="btn previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[3].slideTitle}</h2>
            <article>
              <h5>{this.props.slides[3].slideBodyText}</h5>
              <img src={this.props.slides[3].imageUrl} className="outside-image"alt="Campaign signs next to road" />
            </article>

        </div>
      </main>
    );
  }
}

export default OutsidePollingPlace;
