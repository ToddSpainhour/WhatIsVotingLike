import React from 'react';

import { Link } from 'react-router-dom';

import './VotingMachine.scss';

class VotingMachine extends React.Component {
  render() {
    let nextButton;
    if (this.props.votingMachineComplete === true) {
      nextButton = <Link to='./sticker' className="btn  m-3 active-next-button">Next</Link>;
    } else {
      nextButton = <button className="btn  m-3 disabled-next-button">Next</button>;
    }
    return (
      <main className="VotingMachine">
        <h2>{this.props.slides[6].slideTitle}</h2>
        <article>
          <h5>{this.props.slides[6].slideBodyText}</h5>
        </article>

        <div>
          <img src={this.props.slides[6].imageUrl} alt="Voting Machine"/>
        </div>

        <button onClick={this.props.ChangeVotingMachineCompletedStatus} >Click to fulfill slide requirements</button>

        <div className="module-navigation d-flex justify-content-sm-end justify-content-center">
          <Link to='./checkIn' className="btn  m-3 previous-button">Previous</Link>
          {nextButton}
        </div>
      </main>
    );
  }
}

export default VotingMachine;
