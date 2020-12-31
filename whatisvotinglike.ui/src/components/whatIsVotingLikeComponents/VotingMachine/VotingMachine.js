import React from 'react';

import { Link } from 'react-router-dom';

import './VotingMachine.scss';

class VotingMachine extends React.Component {
  componentDidMount() {
    setTimeout(this.props.ChangeVotingMachineCompletedStatus, 5000);
  }

  render() {
    let nextButton;
    if (this.props.votingMachineComplete === true) {
      nextButton = <Link to='./sticker' className="btn  m-3 active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn  m-3 disabled-next-button">Next</button>;
    }
    return (
      <main className="VotingMachine">
        <div className="voting-machine-container">
          <nav className="module-navigation d-flex justify-content-sm-end justify-content-center">
            <Link to='./checkIn' className="btn  m-3 previous-button">Previous</Link>
            {nextButton}
          </nav>
          <h2>{this.props.slides[6].slideTitle}</h2>
          <article>
            <h5>{this.props.slides[6].slideBodyText}</h5>
          </article>

          <div>
            <img src={this.props.slides[6].imageUrl} alt="Voting Machine"/>
          </div>

        </div>
      </main>
    );
  }
}

export default VotingMachine;
